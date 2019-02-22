package com.stackroute.pie.service;

import com.mongodb.DBObject;
import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.repository.ExternalDbRepository;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.sql.*;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;



@Service
public class ExternalDbServiceImpl implements ExternalDbService {


    @Autowired
    public ExternalDbServiceImpl(ExternalDbRepository externalDbRepository) {
        this.externalDbRepository = externalDbRepository;
    }

    @Autowired
    private ExternalDbRepository externalDbRepository;


    @Override
    public Insurer getPolicies(String insurerName) throws ClassNotFoundException, SQLException, UnsupportedEncodingException, JSONException {

        String origFile = null;

        String dbURL = "jdbc:mysql://172.23.239.178:3306/insurerFinal";
        String dbUser = "fish";
        String dbPass = "12345";

        Class.forName("com.mysql.cj.jdbc.Driver");
        DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
        Connection conn = DriverManager.getConnection(dbURL, dbUser, dbPass);


        Statement st = conn.createStatement();

        Blob xmlfile = null;
        String query = "Select * from " + insurerName;
        ResultSet rs = st.executeQuery(query);

        // System.out.println(rs.first()+";;;;;;;;");
        byte[] bdata = null;
        InputStream binaryStream = null;
        while (rs.next()) {
            System.out.println("###########");
            xmlfile = rs.getBlob(11);
           // System.out.println(xmlfile);
            binaryStream = xmlfile.getBinaryStream(1, xmlfile.length());
            //System.out.println(binaryStream + "**********");
            String str = binaryStream.toString();
            bdata = str.getBytes();
            origFile = new String(bdata, "UTF-8");

        }

        Scanner s = new Scanner(binaryStream).useDelimiter("\\A");
        String result = s.hasNext() ? s.next() : "";
        //System.out.print("*****" + result);
        DBObject dbObject = null;

        JSONObject obj = XML.toJSONObject(result);
        String stringToBeInserted = obj.toString(4);
        List<Policy> policies = new ArrayList<Policy>();
        Iterator<String> keys = obj.keys();
        String key = keys.next();
        JSONArray name=(JSONArray)obj.get("policy");

        ArrayList<Policy> police = new ArrayList<Policy>();

        for(int i=0;i<name.length();i++) {

            String[] policystr = name.getJSONObject(i).toString().split(",");

            Policy policy1 = new Policy();
            policy1.setPolicyId(Long.parseLong(policystr[0].split(":")[1]));
            policy1.setPolicyName(policystr[1].split(":")[1].replace("\"",""));
            policy1.setMaxAge(Integer.parseInt(policystr[2].split(":")[1]));
            policy1.setMinAge(Integer.parseInt(policystr[3].split(":")[1]));
            policy1.setWaitingPeriod(Integer.parseInt(policystr[4].split(":")[1]));
            policy1.setMinSumInsured(Long.parseLong(policystr[5].split(":")[1]));
            policy1.setMaxSumInsured(Long.parseLong(policystr[6].split(":")[1]));
            policy1.setNoOfCashLessHospitals(Integer.parseInt(policystr[7].split(":")[1]));
            policy1.setInsurerName(policystr[8].split(":")[1].replace("\"","").replace("}",""));



            police.add(policy1);

        }

        Iterator i = police.iterator();
        while (i.hasNext()){
            System.out.println(i.next());
        }

        System.out.println("insname"+ insurerName);
        Insurer insurer1 = externalDbRepository.findByInsurerName(insurerName).get();
        System.out.println("@@@@@@@@@@@@@@@@"+insurer1);

        if(insurer1.getPolicies() == null){
            policies.addAll(police);
        }
        else {
            policies.addAll(insurer1.getPolicies());
            policies.addAll(police);
        }
        insurer1.setPolicies(policies);
        externalDbRepository.deleteByInsurerName(insurerName);
        externalDbRepository.save(insurer1);
        return insurer1;

    }

}
