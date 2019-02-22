package com.stackroute.pie.service;

import com.stackroute.pie.domain.Diseases;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.repository.SearchRepository;
import com.stackroute.pie.service.SearchService;
import opennlp.tools.postag.POSModel;
import opennlp.tools.postag.POSSample;
import opennlp.tools.postag.POSTaggerME;
import opennlp.tools.tokenize.SimpleTokenizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.stereotype.Service;
import springfox.documentation.annotations.Cacheable;
import java.io.InputStream;
import java.util.*;


@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    public SearchServiceImpl(SearchRepository searchRepository) {
        this.searchRepository = searchRepository;

    }

    @Autowired
    SearchRepository searchRepository;

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

    public static String[] stopwords = {".", "a", "as", "able", "about", "above", "according", "across", "actually", "after", "afterwards", "again",
            "against", "age", "all", "allow", "allows", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an",
            "and", "another", "any", "anybody", "anyone", "anything", "anyway", "anyways", "anywhere", "apart", "appear", "appropriate",
            "are", "arent", "around", "as", "aside", "ask", "associated", "at", "available", "away", "be", "became", "because", "become",
            "becomes", "becoming", "been", "before", "behind", "being", "below", "beside", "besides", "best", "better", "between", "both", "brief", "but", "by", "came", "can", "cant", "cannot", "cause", "causes", "certain", "changes",
            "come", "comes", "concerning", "consequently", "consider", "considering", "contain", "containing", "contains", "corresponding", "could", "couldnt", "course",
            "currently", "described", "did", "didnt", "different", "do", "does", "doesnt", "doing", "dont", "done", "down", "during", "each",
            "eg", "eight", "either", "else", "enough", "entirely", "especially", "even", "ever", "every", "everybody", "everyone", "everything",
            "ex", "exactly", "example", "except", "far", "few", "fifth", "first", "five", "for", "forth",
            "four", "from", "further", "get", "gets", "getting", "given", "gives", "go", "goes", "going", "gone", "got", "gotten", "had", "hadnt", "happens",
            "hardly", "has", "hasnt", "have", "havent", "having", "he", "hello", "help", "hence", "her", "here", "heres", "hers", "herself",
            "hi", "him", "himself", "his", "how", "however", "i", "id", "ill", "im", "ive", "ie", "if", "ignored", "immediate", "in", "indicate", "indicated", "indicates", "inner", "instead", "into", "inward", "is", "isnt", "it", "its", "itself", "just", "keep", "keeps",
            "kept", "know", "knows", "known", "last", "lately", "later", "latter", "latterly", "least", "less", "let", "lets", "like", "liked", "likely", "little", "look", "looking",
            "looks", "ltd", "mainly", "many", "may", "maybe", "me", "mean", "meanwhile", "merely", "might", "more", "moreover", "most", "mostly", "much", "must", "my", "myself", "name", "namely",
            "nd", "near", "nearly", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "no", "nobody", "non", "none", "nor", "normally", "not",
            "nothing", "now", "of", "off", "often", "ok", "okay", "old", "on", "once", "one", "ones", "only", "or", "other", "others", "otherwise",
            "our", "ours", "ourselves", "out", "outside", "over", "overall", "own", "particular", "particularly", "per", "perhaps", "placed", "please", "plus", "possible", "probably", "provides", "quite", "rather", "rd", "rs", "really", "reasonably", "regarding", "regardless", "regards", "relatively", "respectively", "right", "said", "same",
            "saw", "say", "saying", "says", "second", "secondly", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sent", "serious", "seriously", "seven",
            "several", "shall", "she", "should", "shouldnt", "since", "six", "so", "some", "somebody", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon",
            "specified", "specify", "specifying", "still", "sub", "such", "sup", "sure", "ts", "take", "taken", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "thats", "thats", "the",
            "their", "theirs", "them", "themselves", "then", "thence", "there", "theres", "thereafter", "thereby", "therefore", "therein", "theres", "thereupon", "these", "they", "theyd", "theyll", "theyre",
            "theyve", "think", "third", "this", "thorough", "thoroughly", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "took", "toward", "towards", "tried",
            "tries", "truly", "try", "trying", "twice", "two", "un", "under", "unfortunately", "unless", "unlikely", "until", "unto", "up", "upon", "us", "use", "used", "useful", "uses", "using", "usually",
            "value", "various", "very", "via", "viz", "vs", "want", "wants", "was", "wasnt", "way", "we", "wed", "well", "were", "weve", "welcome", "well", "went", "were", "werent", "what", "whats", "whatever",
            "when", "whence", "whenever", "where", "wheres", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whos", "whoever", "whole", "whom",
            "whose", "why", "will", "willing", "wish", "with", "within", "without", "wont", "wonder", "would", "would", "wouldnt", "yes", "yet", "you", "youd", "youll", "youre", "youve", "your", "yours", "yourself", "yourselves", "zero",
            "policy", "disease", "diseases", "policies"};


    public static Set<String> stopWordSet = new HashSet<String>(Arrays.asList(stopwords));

    @Cacheable(value = "policies")
    public List<Policy> getByDisease(String disease) {
        return searchRepository.findByDiseasesListDiseaseName(disease);
    }

    @Cacheable(value = "diseases")
    List<Policy> findByDiseasesListDiseaseName(String diseaseName) {
        return searchRepository.findByDiseasesListDiseaseName(diseaseName);
    }

    @Cacheable(value = "Insurer")
    List<Policy> findByInsurerName(String insurerName) {
        return searchRepository.findByInsurerName(insurerName);
    }

    @Cacheable(value = "policies")
    List<Policy> findByPolicyName(String policyName) {
        return searchRepository.findByPolicyName(policyName);
    }

    @Cacheable(value = "SumInsured")
    List<Policy> findBySumInsured(int num) {
        return searchRepository.findBySumInsured(num);
    }

    @Cacheable(value = "findAll")
    List<Policy> findAll() {
        return searchRepository.findAll();
    }

    @Cacheable("policies")
    public List<Policy> tokenString(String value) throws Exception {
        List<String> tokenList = new ArrayList<>();
        List<Policy> policies = new ArrayList<>();

        List<String> newpolicy1 = new ArrayList<>();
        Policy newpolicy;
        String companyString = "MaxBupa,StarHealth,Apollo,Religare";
        String policyString = "JeevanSathi , JeevanAnand ,JeevanVima ,HealthSecure ,JeevanHealth";
        String diseaseString = "cancer, diabetes, aids, dengue, malaria, tuberculosis, cardiac, heartattack, surgery";

        String result = "";
        String[] words = value.split("\\s+");
        for (String word : words) {
            if (word.isEmpty()) continue;
            if (stopWordSet.contains(word)) continue; //remove stopwords
            result += (word + " ");
        }

        SimpleTokenizer tokenizer = SimpleTokenizer.INSTANCE;
        InputStream inputStream = getClass().getResourceAsStream("/en-pos-maxent.bin");
        POSModel model = new POSModel(inputStream);
        POSTaggerME tagger = new POSTaggerME(model);
        System.out.println("After NameFinderME");
        String[] token1 = tokenizer.tokenize(result);
        String[] tags = tagger.tag(token1);
        for (String t : tags) {
            System.out.println("T :" + t);
        }
        int j = 0;
        POSSample sample = new POSSample(token1, tags);
        System.out.println(sample.toString());
        String[] strings = sample.toString().split(" ");
        System.out.println("strings[0] " + strings[0]);
        int len = strings.length;
        System.out.println(len);
        if (len == 1) {

            if (strings[0].contains("CD")) {
                List<Policy> addPolicy = new ArrayList<>();
                j = Integer.parseInt(strings[0].split("_")[0]);

                if (j > 1000) {
                    addPolicy = findBySumInsured(j);
                    return addPolicy;
                } else if (j < 100) {
                    System.out.println("Inside CD");
                    List<Policy> policyList = findAll();
                    for (Policy p : policyList) {
                        if (j < p.getMaxAge() && j > p.getMinAge()) {
                            addPolicy.add(p);
                        }
                    }

                }
                return addPolicy;
            } else if (strings[0].contains("NN")) {
                System.out.println("Added to tokenList");
                tokenList.add(strings[0].split("_")[0]);
                System.out.println("Added " + tokenList.get(0));

                if (policyString.contains(tokenList.get(0))) {
                    System.out.println(strings[0].split("_")[0]);
                    List<Policy> policies2 = findByPolicyName(tokenList.get(0));
                    return policies2;
                } else if (companyString.contains(tokenList.get(0))) {
                    List<Policy> policies2 = findByInsurerName(tokenList.get(0));
                    return policies2;
                } else if (diseaseString.contains(tokenList.get(0))) {
                    System.out.println("Am here!!");
                    List<Policy> policies2 = findByDiseasesListDiseaseName(strings[0].split("_")[0]);
                    return policies2;
                }
            }
        } else if (len == 2) {
            System.out.println("Entered else if");
            for (int in = 0; in < strings.length; in++) {
                System.out.println(strings[in]);
                if (strings[in].contains("NN") && strings[1].contains("CD")) {
                    newpolicy1.add(strings[in].split("_")[0]);
                    newpolicy1.add(strings[1].split("_")[0]);
                    System.out.println(newpolicy1.toString());

                    for (int t = 0; t < newpolicy1.size(); t++) {
                        for (int b = t + 1; b < newpolicy1.size(); b++) {
                            int num = Integer.parseInt(newpolicy1.get(b));
                            if (policyString.contains(newpolicy1.get(t)) && num < 100) {
                                List<Policy> addPolicy = new ArrayList<>();
                                List<Policy> arrayPolicy = findByPolicyName(newpolicy1.get(t));
                                for (Policy pol : arrayPolicy) {
                                    if (pol.getMinAge() < num && pol.getMaxAge() > num) {
                                        addPolicy.add(pol);
                                    }
                                }
                                return addPolicy;
                            } else if (policyString.contains(newpolicy1.get(t)) && num >= 1000) {
                                List<Policy> addPolicy = new ArrayList<>();
                                List<Policy> arrayPolicy = findByPolicyName(newpolicy1.get(t));
                                for (Policy pol : arrayPolicy) {
                                    if (pol.getSumInsured() == num) {
                                        addPolicy.add(pol);
                                    }
                                }
                                return addPolicy;
                            } else if (diseaseString.contains(newpolicy1.get(t)) && num > 1000) {
                                List<Policy> addPolicy = new ArrayList<>();
                                List<Policy> arrayPolicy = findByDiseasesListDiseaseName(newpolicy1.get(t));
                                for (Policy pol : arrayPolicy) {
                                    System.out.println(pol.toString());
                                    if (pol.getSumInsured() == num) {
                                        addPolicy.add(pol);
                                    }
                                }
                                return addPolicy;
                            } else if (diseaseString.contains(newpolicy1.get(t)) && num < 100) {
                                List<Policy> addPolicy = new ArrayList<>();
                                List<Policy> arrayPolicy = findByDiseasesListDiseaseName(newpolicy1.get(t));
                                for (Policy pol : arrayPolicy) {
                                    if (pol.getMinAge() < num && pol.getMaxAge() > num) {
                                        addPolicy.add(pol);
                                    }
                                }
                                return addPolicy;
                            }

                        }

                    }
                } else if (strings[in].contains("CD") && strings[1].contains("NN")) {
                    newpolicy1.add(strings[in].split("_")[0]);
                    newpolicy1.add(strings[1].split("_")[0]);
                    System.out.println(newpolicy1.toString());

                    for (int t = 0; t < newpolicy1.size(); t++) {
                        for (int b = t + 1; b < newpolicy1.size(); b++) {
                            int num = Integer.parseInt(newpolicy1.get(t));
                            if (policyString.contains(newpolicy1.get(b)) && num < 100) {
                                List<Policy> addPolicy = new ArrayList<>();
                                List<Policy> arrayPolicy = findByPolicyName(newpolicy1.get(b));
                                for (Policy pol : arrayPolicy) {
                                    if (pol.getMinAge() < num && pol.getMaxAge() > num) {
                                        addPolicy.add(pol);
                                    }
                                }
                                return addPolicy;
                            } else if (policyString.contains(newpolicy1.get(b)) && num >= 1000) {
                                List<Policy> addPolicy = new ArrayList<>();
                                List<Policy> arrayPolicy = findByPolicyName(newpolicy1.get(b));
                                for (Policy pol : arrayPolicy) {
                                    if (pol.getSumInsured() == num) {
                                        addPolicy.add(pol);
                                    }
                                }
                                return addPolicy;
                            } else if (diseaseString.contains(newpolicy1.get(b)) && num > 1000) {
                                List<Policy> addPolicy = new ArrayList<>();
                                List<Policy> arrayPolicy = findByDiseasesListDiseaseName(newpolicy1.get(b));
                                for (Policy pol : arrayPolicy) {
                                    System.out.println(pol.toString());
                                    if (pol.getSumInsured() == num) {
                                        addPolicy.add(pol);
                                    }
                                }
                                return addPolicy;
                            } else if (diseaseString.contains(newpolicy1.get(b)) && num < 100) {
                                List<Policy> addPolicy = new ArrayList<>();
                                List<Policy> arrayPolicy = findByDiseasesListDiseaseName(newpolicy1.get(b));
                                for (Policy pol : arrayPolicy) {
                                    if (pol.getMinAge() < num && pol.getMaxAge() > num) {
                                        addPolicy.add(pol);
                                    }
                                }
                                return addPolicy;
                            }

                        }

                    }
                } else if (strings[in].contains("NN")) {
                    System.out.println("Added to tokenList");
                    tokenList.add(strings[in].split("_")[0]);
                }
            }

            for (String t : tokenList) {
                System.out.println("tokenList " + t);
            }
            for (int i = 0; i < tokenList.size(); i++) {
                for (int k = i + 1; k < tokenList.size(); k++) {
                    if (policyString.contains(tokenList.get(i)) && diseaseString.contains(tokenList.get(i + 1))) {
                        System.out.println("Found " + tokenList.get(k));
                        List<Policy> addPolicy = new ArrayList<>();
                        List<Policy> poly = findByDiseasesListDiseaseName(tokenList.get(k));
                        System.out.println(poly.size());
                        for (Policy s : poly) {
                            if (s.getPolicyName().equals(tokenList.get(i))) {
                                System.out.println("Before adding");
                                addPolicy.add(s);
                                System.out.println("Added");
                                return addPolicy;
                            }
                        }
                    } else if (diseaseString.contains(tokenList.get(i)) && policyString.contains(tokenList.get(k))) {
                        List<Policy> poly = findByDiseasesListDiseaseName(tokenList.get(i));
                        List<Policy> addPolicy = new ArrayList<>();
                        for (Policy s : poly) {
                            if (tokenList.get(k).equals(s.getPolicyName()))
                                addPolicy.add(s);
                            return addPolicy;
                        }
                    } else if (diseaseString.contains(tokenList.get(i)) && companyString.contains(tokenList.get(k))) {
                        System.out.println(tokenList.get(i));
                        List<Policy> addPolicy = new ArrayList<>();
                        List<Policy> pol = findByDiseasesListDiseaseName(tokenList.get(i));
                        for (Policy s1 : pol) {
                            System.out.println(tokenList.get(k));
                            System.out.println(s1.getInsurerName());
                            if (tokenList.get(k).equals(s1.getInsurerName())) {
                                addPolicy.add(s1);
                                System.out.println(s1.getInsurerName());
                                System.out.println(s1.toString());
                                return addPolicy;
                            }
                        }
                    } else if (companyString.contains(tokenList.get(i)) && diseaseString.contains(tokenList.get(k))) {
                        List<Policy> addPolicy = new ArrayList<>();
                        List<Policy> poly = findByDiseasesListDiseaseName(tokenList.get(k));
                        for (Policy s : poly) {
                            System.out.println("In Company disease");
                            if (tokenList.get(i).equals(s.getInsurerName())) {
                                addPolicy.add(s);
                                System.out.println(s.toString());
                                return addPolicy;
                            }
                        }
                    } else if (companyString.contains(tokenList.get(i))) {
                        List<Policy> addPolicy = new ArrayList<>();
                        List<Policy> policies1 = searchRepository.findByInsurerName(tokenList.get(i));
                        for (Policy p : policies1) {
                            System.out.println("Policy:: " + p.getPolicyName());
                            if (p.getPolicyName().equals(tokenList.get(k))) {
                                System.out.println("TokenList :" + tokenList.get(k));
                                addPolicy.add(p);
                                System.out.println("Entered into company and policy");

                            }

                        }
                        return addPolicy;
                    } else if (policyString.contains(tokenList.get(i))) {
                        List<Policy> addPolicy = new ArrayList<>();
                        List<Policy> policies1 = searchRepository.findByPolicyName(tokenList.get(i));
                        System.out.println(policies1.size());
                        for (Policy p : policies1) {
                            System.out.println(tokenList.get(i));
                            System.out.println("Policy:: " + p.getInsurerName());
                            if (tokenList.get(k).equals(p.getInsurerName())) {
                                System.out.println("TokenList :" + tokenList.get(k));
                                addPolicy.add(p);
                                System.out.println("Entered into company and policy");

                            }
                        }
                        return addPolicy;
                    }

                }
            }
        }
        return null;
    }
}










