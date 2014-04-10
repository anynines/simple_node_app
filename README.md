##nodejs example application

A simple nodejs app to test a deployment environment.

####Deploy on Cloud Foundry

Clone this repository, run ```npm install``` and push to Cloud Foundry.

<pre>
git clone git@github.com:wolfoo2931/simple_node_app.git 
cd simple_node_app
npm install
cf push
</pre>
 
Follow the steps in the wizard.
 
<pre>
Name> nodeapp
 
Instances> 1
 
Custom startup command> node bin/main.js
 
1: 64M
2: 128M
3: 256M
4: 512M
5: 1G
Memory Limit> 256M
 
Creating nodeapp... OK
 
1: nodeapp
2: none
Subdomain> nodeapp
 
1: cf.anynines.de
2: none
Domain> cf.anynines.de
 
Binding nodeapp.cf.anynines.de to nodeapp... OK
 
Create services for application?> n
 
Bind other services to application?> n
 
Save configuration?> y
 
Saving to manifest.yml... OK
Uploading nodeapp... OK
Starting nodeapp... OK
</pre>

Find your app at [nodeapp.cf.anynines.de](http://nodeapp.cf.anynines.de/)



