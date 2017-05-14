package com.qin.advice;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

@ControllerAdvice
public class MyControllerAdvice {

	@ModelAttribute("ctx")
	public String setContextPath(HttpServletRequest request){
		String contextPath=request.getContextPath();
		System.out.println(contextPath);
		return contextPath;
	}
}
