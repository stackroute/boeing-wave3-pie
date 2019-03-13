package com.stackroute.pie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;



@SpringBootApplication

public class InsurerPoliciesApplication  {
	static String line = "";
	public static void main(String[] args)  throws IOException, SQLException, ClassNotFoundException{
		SpringApplication.run(InsurerPoliciesApplication.class, args);
		String[] link = {"/MaxBupa.xml","/Apollo.xml","/Religare.xml","/StarHealth.xml"}; //url of xml file that is storing the data
		String[] insurers = {"MaxBupa","Apollo","Religare","StarHealth"};
		String[] strr = new String[4];

		for(int i=0;i<insurers.length;i++){

			int count = 0;

			//parsing through the xml file line by line and storing it in a string

			BufferedReader br = new BufferedReader(new FileReader(link[i]));

			while ((line = br.readLine()) != null) {
				if (count > 2)

					strr[i] += line;
				count++;
			}

			System.out.println(link[i]);

			//setting up the JDBC connection for the mysql database
			String dbURL = "jdbc:mysql://localhost:3306/insurerFinal";
			String dbUser = "root";
			String dbPass = "root";

			Class.forName("com.mysql.cj.jdbc.Driver");
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			Connection conn = DriverManager.getConnection(dbURL, dbUser, dbPass);

			// inserting data from xml file into UserPolicies table in the policyDB database

			String sql = "INSERT INTO " + insurers[i] +  "(Policy) values(?)";
			PreparedStatement statement = conn.prepareStatement(sql);
			statement.setString(1, strr[i].substring(0, strr[i].length() - 10));
			statement.executeUpdate();

		}
	}

}

