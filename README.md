##nodejs example application

A simple nodejs app to test a deployment environment.

####Deploy on Cloud Foundry

Clone this repository, run ```npm install``` and push to Cloud Foundry.

<pre>
git clone git@github.com:wolfoo2931/simple_node_app.git
cd simple_node_app
npm install

cp manifest.yml.example manifest.yml
vim manifest.yml # exchange all occurences of your_app_name with the desired application instance name.

cf push
</pre>

Find your app at [your_app_name.cf.anynines.de](http://your_app_name.de.a9sapp.eu)
