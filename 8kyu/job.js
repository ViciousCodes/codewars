Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

Let's give this a try. We'll create a function match (job_matching in Python) which takes a candidate and a job, which will return a Boolean indicating whether the job is a valid match for the candidate.

A candidate will have a minimum salary, so it will look like this:

let candidate = {
  minSalary: 120000
}
A job will have a maximum salary, so it will look like this:

let job = {
  maxSalary: 140000
}
If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.

my solution

function match(candidate, job) {
    if (!candidate.minSalary || !job.maxSalary) {
      throw new Error("Candidate's minimum salary and job's maximum salary are required.");
    }
  
    // Calculate the minimum salary with the 10% wiggle room
    const minSalaryWithWiggleRoom = candidate.minSalary * 0.9; // 10% deduction
  
    // Check if the calculated minimum salary is less than or equal to the job's maximum salary
    if (minSalaryWithWiggleRoom <= job.maxSalary) {
      return true;
    } else {
      return false;
    }
  }

  2nd solution 
  function match(candidate, job) {
    if(!candidate.minSalary || !job.maxSalary)
      throw "Error!!";
    return (candidate.minSalary * 0.9) <= job.maxSalary;
  }

  3rd 
  const match = (candidate, job) => {
    if (!job.maxSalary || !candidate.minSalary) throw TypeError('Missing salary');
    return job.maxSalary >= (candidate.minSalary * .9);
  };


  4th
  const match = (candidate, job ) => {
    console.log(candidate.minSalary, job.maxSalary);
    
    if(!candidate.minSalary  || !job.maxSalary) {
      throw new Error(123);
    }
    
    
     return  candidate.minSalary - candidate.minSalary/10 <= job.maxSalary 
    }