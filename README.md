# 13-01-2024

Create the angular project. Add the project to github. Added About me, Eduction, Skills, Work Experience & contact me section. Added Empty Blog section . Will add the blog section later.

# 14-01-2024

I created API gateway Named Contact. Also created a lamda Named contactLamda and assign this lamda to handle the Post method of API gateway. I created SNS topic named contact and created an email subscription for this topic. Also created a SQS named ContactUsQueue. From the lamda i wrote message in SNS and SQS. I created another lamda named data-service that retrive the message from SQS and writing to dynamodb table that i created. I used PostMan to call the api. I received the email and data is saved successfully to dynamodb. 

API endpoint: https://5im0n1cx5b.execute-api.us-east-1.amazonaws.com/V1/contact 
Message Body :  {"id": "4", "name":"sabbir", "email":"kahmed@outlier.com", "phone":"+16418192689", "title":"Test Title", "message":"Test Message"}

# 15-01-2024

As i used the online templete, i created differet component i.e about, blog, contact, education, skills, works and added the relevant content in those. I add validation in contact form, add success & failure message. In contact form submit, i did a post call to the API enndpoint that i created yesterday, i received the email and data is saved in dynamodb table. 

