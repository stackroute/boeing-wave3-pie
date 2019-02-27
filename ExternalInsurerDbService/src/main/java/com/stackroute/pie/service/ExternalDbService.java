package com.stackroute.pie.service;

import com.stackroute.pie.domain.Insurer;
import org.json.JSONException;

import java.io.UnsupportedEncodingException;
import java.sql.SQLException;

public interface ExternalDbService {

    Insurer getPolicies(String insurerName) throws ClassNotFoundException, SQLException, UnsupportedEncodingException, JSONException;


}
