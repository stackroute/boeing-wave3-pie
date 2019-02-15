package com.stackroute.pie.service;

import com.stackroute.pie.domain.Diseases;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.repository.SaveRepository;
import com.stackroute.pie.repository.SearchRepository;
import com.stackroute.pie.service.SearchService;
import edu.stanford.nlp.tagger.maxent.MaxentTagger;
import opennlp.tools.postag.POSModel;
import opennlp.tools.postag.POSSample;
import opennlp.tools.postag.POSTaggerME;
import opennlp.tools.tokenize.SimpleTokenizer;
import opennlp.tools.util.Span;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.TypedAggregation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.query.Query;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {
    private SearchRepository searchRepository;
    private SaveRepository saveRepository;

    @Autowired
    public SearchServiceImpl(SearchRepository searchRepository, SaveRepository saveRepository) {
        this.searchRepository = searchRepository;
        this.saveRepository = saveRepository;
    }

    @Autowired
    private MongoOperations mongoOperations;

    private MongoTemplate mongoTemplate;

    @Override
    public List<Policy> getAllPolicies(String value) {
        String diseases = "cancer, diabetes, aids, dengue, malaria, tuberculosis, cardiac, heartattack, surgery";
        List<Policy> policy1 = new ArrayList<>();
        List<Policy> policy2 = new ArrayList<>();


        if (diseases.contains(value)) {
            String[] strings = diseases.split(", ");
            for (int i = 0; i < strings.length; i++) {

                if (strings[i].matches(value)) {
                    System.out.println("String value" + value);

                    List<Policy> policies = searchRepository.findAll();
                    for (Policy a : policies) {
                        System.out.println("Inside policy" + a);
                        List<Diseases> disease = a.getDiseasesList();
                        for (Diseases d : disease) {
                            System.out.println("Inside disease" + d);
                            if (d.getDiseaseName().equals(value)) {
                                System.out.println("Inside if part of disease" + d.getDiseaseName());
                                policy1.add(a);
                            }
                        }
                    }
                }
            }
            return policy1;
        } else {
            policy2 = searchRepository.findByPolicyName(value);
            return policy2;
        }
    }

    @Override
    public Policy savePolicy(Policy policy) {
        Policy policy1 = searchRepository.save(policy);
        return policy1;
    }


    public List<Policy> tokenString(String value) throws Exception {
        List<String> tokenList = new ArrayList<>();
        List<Policy> policies = new ArrayList<>();
        List<Policy> addPolicy = new ArrayList<>();
        List<Policy> newpolicy1 = new ArrayList<>();
        Policy newpolicy;
        String companyString = "MaxBupa,StarHealth,Apollo,Religare";
        String policyString = "JeevanSathi,JeevanAnand,JeevanVima,Healthsecure,JeevanHealth";
        String diseaseString = "cancer, diabetes, aids, dengue, malaria, tuberculosis, cardiac, heartattack, surgery";
        SimpleTokenizer tokenizer = SimpleTokenizer.INSTANCE;
        InputStream inputStream = getClass().getResourceAsStream("/en-pos-maxent.bin");
        POSModel model = new POSModel(inputStream);
        POSTaggerME tagger = new POSTaggerME(model);
        System.out.println("After NameFinderME");
        String[] token1 = tokenizer.tokenize(value);
        String[] tags = tagger.tag(token1);
        String[] policyArr = policyString.split(",");

        int j = 0;
        POSSample sample = new POSSample(token1, tags);
        System.out.println(sample.toString());
        String[] strings = sample.toString().split(" ");
        for (String in : strings) {
            System.out.println(in);
            if (in.contains("CD")) {
                j = Integer.parseInt(in.split("_")[0]);

                if (j > 1000) {
                    addPolicy = searchRepository.findBySumInsured(j);
                } else if (j < 100) {
                    System.out.println("Inside CD");
                    List<Policy> policyList = searchRepository.findAll();
                    for (Policy p : policyList) {
                        if (j < p.getMaxAge() && j > p.getMinAge()) {
                            addPolicy.add(p);
                        }
                    }

                }

            }
            if (in.contains("NN") && !in.contains("policy") && !in.contains("policies")) {
                tokenList.add(in.split("_")[0]);
            }


        }
        for (String t : tokenList) {
            System.out.println(t);
        }
        if (tokenList.size() == 1) {
            if (policyString.contains(tokenList.get(0))) {
                List<Policy> policies2 = searchRepository.findByPolicyName(tokenList.get(0));
                return policies2;
            } else if (companyString.contains(tokenList.get(0))) {
                List<Policy> policies2 = searchRepository.findByInsurerName(tokenList.get(0));
                return policies2;
            } else if (diseaseString.contains(tokenList.get(0))) {
                List<Policy> policies2 = searchRepository.findByDiseasesListDiseaseName(tokenList.get(0));
                return policies2;
            }
        } else {
            System.out.println(tokenList.size());
            for (int i = 0; i < tokenList.size(); i++) {
                for (int k = i + 1; k < tokenList.size(); k++) {
                    if (policyString.contains(tokenList.get(i)) && diseaseString.contains(tokenList.get(k))) {
                        List<Policy> poly = searchRepository.findByDiseasesListDiseaseName(tokenList.get(k));
                        for (Policy s : poly) {
                            if (s.getPolicyName().equals(tokenList.get(i)))
                                addPolicy.add(s);
                        }
                    } else if (diseaseString.contains(tokenList.get(i)) && policyString.contains(tokenList.get(k))) {
                        List<Policy> poly = searchRepository.findByDiseasesListDiseaseName(tokenList.get(i));
                        for (Policy s : poly) {
                            System.out.println(s.toString());
                            if (s.getPolicyName().equals(tokenList.get(k)))
                                addPolicy.add(s);
                        }
                    } else if (diseaseString.contains(tokenList.get(i)) && companyString.contains(tokenList.get(k))) {
                        System.out.println("HHHHHHHHHHHHHHHHHH");
                        System.out.println(tokenList.get(i));
                        List<Policy> pol = searchRepository.findByDiseasesListDiseaseName(tokenList.get(i));
                        for (Policy s1 : pol) {
                            System.out.println(tokenList.get(k));
                            System.out.println(s1.getInsurerName());
                            if (tokenList.get(k).equals(s1.getInsurerName())) {
                                addPolicy.add(s1);
                                System.out.println(s1.getInsurerName());
                                System.out.println(s1.toString());
                            }
                        }
                    } else if (companyString.contains(tokenList.get(i)) && diseaseString.contains(tokenList.get(k))) {
                        List<Policy> poly = searchRepository.findByDiseasesListDiseaseName(tokenList.get(k));
                        for (Policy s : poly) {
                            System.out.println("In Company disease");
                            if (tokenList.get(i).equals(s.getInsurerName())) {
                                addPolicy.add(s);
                                System.out.println(s.toString());
                            }
                        }
                    } else if (companyString.contains(tokenList.get(i))) {
                        policies = searchRepository.findByInsurerName(tokenList.get(i));
                        for (Policy p : policies) {
                            addPolicy.add(p);
                        }
                    } else if (companyString.contains(tokenList.get(k))) {
                        policies = searchRepository.findByInsurerName(tokenList.get(k));
                        for (Policy p : policies) {
                            addPolicy.add(p);
                        }
                    } else if (policyString.contains(tokenList.get(i))) {
                        policies = searchRepository.findByPolicyName(tokenList.get(i));
                        for (Policy p : policies) {
                            addPolicy.add(p);
                        }
                    } else if (policyString.contains(tokenList.get(k))) {
                        policies = searchRepository.findByPolicyName(tokenList.get(k));
                        for (Policy p : policies) {
                            addPolicy.add(p);
                        }
                    } else if (diseaseString.contains(tokenList.get(i))) {
                        System.out.println("inside diseaseString");
                        policies = searchRepository.findByDiseasesListDiseaseName(tokenList.get(i));
                        for (Policy p : policies) {
                            addPolicy.add(p);
                        }
                    }
                }
            }
        }
            return addPolicy;
    }
}





