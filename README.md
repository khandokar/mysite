# 13-01-2024

Create the angular project. Add the project to github. Added About me, Eduction, Skills, Work Experience & contact me section. Added Empty Blog section . Will add the blog section later.

# 14-01-2024

I created API gateway Named Contact. Also created a lamda Named contactLamda and assign this lamda to handle the Post method of API gateway. I created SNS topic named contact and created an email subscription for this topic. Also created a SQS named ContactUsQueue. From the lamda i wrote message in SNS and SQS. I created another lamda named data-service that retrive the message from SQS and writing to dynamodb table that i created. I used PostMan to call the api. I received the email and data is saved successfully to dynamodb. 

API endpoint: https://5im0n1cx5b.execute-api.us-east-1.amazonaws.com/V1/contact 
Message Body :  {"id": "4", "name":"sabbir", "email":"kahmed@outlier.com", "phone":"+16418192689", "title":"Test Title", "message":"Test Message"}

# 15-01-2024

As i used the online templete, i created differet component i.e about, blog, contact, education, skills, works and added the relevant content in those. I add validation in contact form, add success & failure message. In contact form submit, i did a post call to the API enndpoint that i created yesterday, i received the email and data is saved in dynamodb table. 

# 17-01-2024 to 19-01-2024 

I studied on CodeComit, CodeBuid , CodeDeploy, CodePipeline, Aws Beanstalk. Tried to understand the concept and how it works.

# 20-01-2024

Try to Implement CICD in my personal account. Faced some issues and resolved. Learned how it work. Start making is draft copy of blog in word file and keep the necessary screenshot. Removed the services i created and configured in my personal account.

# 21-01-2024

Completed writing blog in word file. Bought domain name and create certificate. Created hosted zone for your domain in Route 53
and other relevant to publish my site. Published URL is https://khandokarsabbir.net. 

# 22-01-2024
Wrote blog in Medium.Url is https://medium.com/@khandokarsabbir/how-to-deploy-a-net-4b487c66a8b6

# 22-01-2024

Update Work Experience in my website. Link the Blog section.Fix the social media links. Show validation message instead of save button disable.

# 23-01-2024

Update Work Experience in my website. Link the Blog section. Fix the social media links. Show validation message instead of save button disable.

# 24-01-2024

My Lamda(s), SNS, SQS, Dynamodb and API gateway all were in my academic account. I created all of them in personal account. I changed some of the service name. Change the url in website code . User cannot post repeated submit now in contact form. Upload in s3 bucket.


# 28-01-2024

I removed the proxy from here, enabled CROS in api. Update the favicon.ico. Replace the demo apit to production api.
Record the demo. Tried to complete the recording in 15 min. Forgot to mention the certificate in the demo.





