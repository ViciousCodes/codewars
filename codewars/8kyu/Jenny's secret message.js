Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her



function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
      return "Hello, my love!";
  }


  my solution 
  function greet(name){
     if(name === "Johnny") { 
        return "Hello, my love!";
    } else {
           return "Hello, " + `${name}` + "!";
  
    }
  }
      

  solution 1 
  function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
  }

  soltion 2 
  function greet(name){  
    if(name === "Johnny")
      return "Hello, my love!";
    return "Hello, " + name + "!";
  }
  soltuion 3 
  let greet = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;
