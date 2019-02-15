package com.stackroute.pie.services;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.client.MongoClient;
import com.stackroute.pie.Model.User;
import com.stackroute.pie.Repository.UserRepository;
import com.stackroute.pie.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//import javax.transaction.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    UserRepository userRepository;


    @Autowired

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }




    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found with -> username or email : " + username));

        return UserPrinciple.build(user);
    }

    public User getRequests(int insuredId) throws UserNotFoundException {
        if(userRepository.existsByInsuredId(insuredId)) {

            User user1 = userRepository.findByInsuredId(insuredId).get();
            return user1;
        }
        else
            throw new UserNotFoundException();
    }

    //to post the dummy requests to the database
    public User postRequest(User user){
        User user1 = userRepository.save(user);
        return user1;
    }


//    public User saveQuestion(User question){
//        System.out.println(question);
//        MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
//        DB db = mongoClient.getDB("admin");
//        DBCollection collection = db.getCollection("counters");
//        BasicDBObject document = new BasicDBObject();
//        document.put("_id", getNextSequence("questionId"));
//        collection.insert(document);
//        question.setInsuredId((int) ((int) document.get("_id")+1.0)));
//        System.out.println("pratima hghjsgfjhdgsfjgdj"+(int)question.getInsuredId());
//
//        if(userRepository.existsById((int)(question.getInsuredId()()))) {
//            throw new QuestionAlreadyExistsException("This Question already exists");
//        }
//        User question1 = userRepository.save(question);
//        return question1;
//    }

}
