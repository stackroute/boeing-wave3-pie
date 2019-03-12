package com.stackroute.pie.service;

import com.stackroute.pie.domain.BuyPolicy;
import com.stackroute.pie.domain.InsurerPolicy;
import com.stackroute.pie.repository.BuyPolicyRepository;
import com.stackroute.pie.repository.ExternalDbRepository;
import org.json.JSONArray;

import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.sql.*;
import java.util.*;


@Service
public class ExternalDbServiceImpl implements ExternalDbService {





    @Autowired
    public ExternalDbServiceImpl(ExternalDbRepository externalDbRepository) {
        this.externalDbRepository = externalDbRepository;
    }

    @Autowired
    private ExternalDbRepository externalDbRepository;

    @Autowired
    private BuyPolicyRepository buyPolicyRepository;

    @Override
    public List<InsurerPolicy> getPolicies(String insurerName) throws ClassNotFoundException, SQLException, UnsupportedEncodingException {

        String dbURL = "jdbc:mysql://localhost/insurerFinal";
        String dbUser = "root";
        String dbPass = "root";

        Class.forName("com.mysql.cj.jdbc.Driver");
        DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
        Connection conn = DriverManager.getConnection(dbURL, dbUser, dbPass);


        Statement st = conn.createStatement();

        Blob xmlfile = null;
        String query = "Select * from " + insurerName;
        ResultSet rs = st.executeQuery(query);

        InputStream binaryStream = null;
        while (rs.next()) {
            xmlfile = rs.getBlob(1);
            binaryStream = xmlfile.getBinaryStream(1, xmlfile.length());

        }

        Scanner s = new Scanner(binaryStream).useDelimiter("\\A");
        String result = s.hasNext() ? s.next() : "";

        JSONObject obj = XML.toJSONObject(result);
        String stringToBeInserted = obj.toString(4);
        System.out.println("%%%%%%%%%%%%"+stringToBeInserted);

        JSONArray name = (JSONArray) obj.get("policy");

        try{
            ArrayList<InsurerPolicy> policy = new ArrayList<InsurerPolicy>();

            for (int i = 0; i < name.length(); i++) {

                String[] policystr = name.getJSONObject(i).toString().split(",");



                InsurerPolicy policy1 = new InsurerPolicy();
                policy1.setPolicyName(policystr[0].split(":")[1].replace("\"",""));
                policy1.setPolicyTerm(Integer.parseInt(policystr[1].split(":")[1]));
                policy1.setWaitingPeriod(Integer.parseInt(policystr[2].split(":")[1]));
                policy1.setMaxSumInsured(Integer.parseInt(policystr[3].split(":")[1]));
                policy1.setInsurerName(policystr[4].split(":")[1].replace("\"",""));
                policy1.setGenderAvail(policystr[5].split(":")[1].replace("\"",""));
                policy1.setPolicyDescription(policystr[6].split(":")[1].replace("\"",""));
                policy1.setInsurerLicense(policystr[7].split(":")[1].replace("\"",""));
                policy1.setPolicyId(Long.parseLong(policystr[8].split(":")[1]));
                policy1.setMaxAge(Integer.parseInt(policystr[9].split(":")[1]));
                policy1.setMinAge(Integer.parseInt(policystr[10].split(":")[1]));
                policy1.setPolicyType(policystr[11].split(":")[1].replace("\"",""));
                policy1.setMinSumInsured(Integer.parseInt(policystr[12].split(":")[1].replace("\"","").replace("}","")));
                policy1.setUniqueId(policy1.getInsurerName()+policy1.getPolicyName());
                policy1.setInsuredList(Arrays.asList(new String[]{"anusha", "manasa","sujan","abhishek","teja"}));

                policy.add(policy1);


            }


            for (InsurerPolicy policyy : policy) {
                externalDbRepository.save(policyy);
            }
            return policy;
        }
        finally {
            st.close();  // Multiple streams were opened. Only the last is closed.
        }
    }

    @Override
    public BuyPolicy buyPolicy(BuyPolicy buyPolicy) throws ClassNotFoundException, SQLException, UnsupportedEncodingException {


        List<BuyPolicy> buyPolicies = buyPolicyRepository.findAll();
        if(buyPolicies.isEmpty()) {
            buyPolicy.setId(1);
        }
        else {
            buyPolicy.setId(buyPolicies.get(buyPolicies.size()-1).getId() + 1);
        }
        return  buyPolicyRepository.save(buyPolicy);

    }


}
