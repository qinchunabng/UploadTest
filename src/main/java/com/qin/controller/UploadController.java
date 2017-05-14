package com.qin.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/web")
public class UploadController {

	@RequestMapping(
			value="/upload.json",
			method={RequestMethod.POST,RequestMethod.GET},
			produces={"application/json;charset=UTF-8"}
			)
	@ResponseBody
	public String index(@ModelAttribute("ctx") String contextPath,HttpServletRequest request){
		System.out.println(contextPath);
		return "你好！";
	}
}
