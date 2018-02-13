Privacy module for Linked USDL

Alongside with the business specifications, privacy has a crucial role in the services description. Personal data agreement properties should describe the privacy categorization that is applied onto the data that are provided, shared and utilized within the service.

Through the implementation of the privacy module tool, we focused on tackling the privacy questions mentioned above - by categorizing the data into two main types of information and extending the basic usdl-core module by defining new business roles that describe each actor's role and interaction with the data at hand.

Build Prerequisites

Upon modification of any javascript (.js) file we need to bundle up (using Browserify) all dependencies that are referenced in the code, due to the fact that browsers dot not have the 'require' method defined by default. Along with Browserify, we need to install some additional packages that allow us to bundle, copy/move and export our javascript code.

For convenience, we created a couple grunt tasks that allow us to automate the process of installing additional node modules (including Browserify), bundling our modified javascript files, and export them into the 'build' directory that the index HTML file will fetch them from.

Node.js and Grunt javascript tools are required for this automation and need to be installed.

Build Commands

Once all the required tools are installed, we can perform the following commands from within the project directory.

> 'npm install' (first time only, installs all required node modules)

> 'grunt' (required after each change in .js files, all tasks will be executed)

Ontologies Configuration

The tool supports ontologies that were build based on Protégé. Prior running the tool against an ontology, a verification should be made that in the first line of the ontology file the prefix is referring the actual ontology file and not some other required one (by default Protégé does so).

For more visit:

http://usdl-privacy.cs.ucy.ac.cy