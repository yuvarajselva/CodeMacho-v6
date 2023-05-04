"use strict";(self.webpackChunkcode_macho_v6=self.webpackChunkcode_macho_v6||[]).push([[771],{5079:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i},default:function(){return m}});var r=n(1151),o=n(7294);function a(e){const t=Object.assign({h1:"h1",img:"img",blockquote:"blockquote",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",ol:"ol"},(0,r.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.h1,null,"Introduction"),"\n",o.createElement(t.img,{src:"https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80",alt:"Hero Image"}),"\n",o.createElement(t.blockquote,null,"\n",o.createElement(t.p,null,"**Are you tired of juggling of between multiple clusters in your local machine? ** Then, it is time to automate your local setup and it's configuration. If you're working as a ",o.createElement(t.code,null,"cluster-admin")," for anyone of the enterprises,\nthen this blog might be able to help you."),"\n"),"\n",o.createElement(t.h2,null,"Prerequisites"),"\n",o.createElement(t.ul,null,"\n",o.createElement(t.li,null,"Bash Scripting"),"\n",o.createElement(t.li,null,o.createElement(t.a,{href:"https://gist.github.com/olih/f7437fb6962fb3ee9fe95bda8d2c8fa4"},"JQ")),"\n"),"\n",o.createElement(t.h2,null,"Pros :star:"),"\n",o.createElement(t.ul,null,"\n",o.createElement(t.li,null,"Multiple clusters can configured locally in an automated way"),"\n",o.createElement(t.li,null,"If your local configuration is messed up (Which I do often :P), it is easy to fix it."),"\n"),"\n",o.createElement(t.h2,null,"Manual Way?"),"\n",o.createElement(t.p,null,"To setup a cluster locally, the cluster context needs to be added in your machine."),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-sh"},'az aks get-credentials -n "${name}" -g "${resource_group}" # Setting the Kube Context\n')),"\n",o.createElement(t.blockquote,null,"\n",o.createElement(t.p,null,"Running the above cmd for every cluster can be cumbersome. Let's automate it!!"),"\n"),"\n",o.createElement(t.h2,null,"CODE"),"\n",o.createElement(t.p,null,"Let's jump into the solution right away."),"\n",o.createElement(t.ol,null,"\n",o.createElement(t.li,null,"First, try to create a json file that acts as the input for our script."),"\n"),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-json"},'{\n  "<Subscription-ID>": {\n    "region": "<region>",\n    "name": "<cluster  name>",\n    "resource_group": "<Resource Group Name>"\n  },\n  "<Subscription-ID>": {\n    "region": "<region>",\n    "name": "<cluster  name>",\n    "resource_group": "<Resource Group Name>"\n  },\n  "<Subscription-ID>": {\n    "region": "<region>",\n    "name": "<cluster  name>",\n    "resource_group": "<Resource Group Name>"\n  },\n  "<Subscription-ID>": {\n    "region": "<region>",\n    "name": "<cluster  name>",\n    "resource_group": "<Resource Group Name>"\n  },\n  "<Subscription-ID>": {\n    "region": "<region>",\n    "name": "<cluster  name>",\n    "resource_group": "<Resource Group Name>"\n  },\n  "<Subscription-ID>": {\n    "region": "<region>",\n    "name": "<cluster  name>",\n    "resource_group": "<Resource Group Name>"\n  },\n  "<Subscription-ID>": {\n    "region": "<region>",\n    "name": "<cluster  name>",\n    "resource_group": "<Resource Group Name>"\n  }\n}\n')),"\n",o.createElement(t.ol,{start:"2"},"\n",o.createElement(t.li,null,"Read the data from the input JSON file created at the previous step using the JQ cmd and fetch the list of subscription IDs."),"\n"),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-sh"},"# Getting the list of subscriptoin IDs\nsubscription_ids=$(echo \"${data}\" | jq -r 'keys | .[]')\n")),"\n",o.createElement(t.ol,{start:"3"},"\n",o.createElement(t.li,null,"Let's loop the list of subscription IDs and update the kube context for every cluster"),"\n"),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-sh"},'echo "${subscription_ids}" | while read -r subscription_id; do\n    echo "Setting the AZ Context for the Current Sub ID: ${subscription_id}"\n    az account set -s "${subscription_id}" # Setting the Az Context\n\n    name=$(echo ${data} | jq -re \'.\'\\"$subscription_id\\"\'.\'name\'\') # Fetching the Name of the Cluster\n    resource_group=$(echo ${data} | jq -re \'.\'\\"$subscription_id\\"\'.\'resource_group\'\') # Fetching the name of the resource group\n    echo "Getting the aks credentials for the cluster : ${name} in the rg: ${resource_group}"\n    az aks get-credentials -n "${name}" -g "${resource_group}" # Setting the Kube Context\ndone\n')),"\n",o.createElement(t.p,null,"The whole code looks like something below."),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-sh"},'#!/bin/bash\n\n# Getting the Cluster Info from the local Json\ndata=$(cat <"./data/cluster_info.json" | jq -r)\n\n# Getting the list of subscriptoin IDs\nsubscription_ids=$(echo "${data}" | jq -r \'keys | .[]\')\necho "${subscription_ids}" | while read -r subscription_id; do\n    echo "Setting the AZ Context for the Current Sub ID: ${subscription_id}"\n    az account set -s "${subscription_id}" # Setting the Az Context\n\n    name=$(echo ${data} | jq -re \'.\'\\"$subscription_id\\"\'.\'name\'\') # Fetching the Name of the Cluster\n    resource_group=$(echo ${data} | jq -re \'.\'\\"$subscription_id\\"\'.\'resource_group\'\') # Fetching the name of the resource group\n    echo "Getting the aks credentials for the cluster : ${name} in the rg: ${resource_group}"\n    az aks get-credentials -n "${name}" -g "${resource_group}" # Setting the Kube Context\ndone\n\n')),"\n",o.createElement(t.blockquote,null,"\n",o.createElement(t.p,null,"NOTE: The above solution is applicable only for AKS Clusters."),"\n"))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?o.createElement(t,e,o.createElement(a,e)):a(e)},c=n(9357),s=n(8678);const u=e=>{let{data:t,children:n}=e;return o.createElement("html",null,o.createElement(s.Z,null,o.createElement("div",{class:"flex items-center justify-center min-h-screen px-1"},o.createElement("div",{className:"flex justify-center drop-shadow-2xl mx-3 p-8 mt-12 mx-24 w-screen md:w-2/4 border-2 border-red-600 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl prose-headings:text-red-600"},o.createElement("article",{className:"prose lg:prose-l prose-img:rounded-xl prose-a:text-blue-600"},o.createElement("h1",{className:"mb-4 pt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"},t.mdx.frontmatter.title),o.createElement("p",{className:"font-bold text-red-600"},t.mdx.frontmatter.date),o.createElement("p",{className:"text-justify"},n))))))},i=e=>{let{data:t}=e;return o.createElement(c.Z,{title:t.mdx.frontmatter.title})};function m(e){return o.createElement(u,e,o.createElement(l,e))}},1151:function(e,t,n){n.d(t,{ah:function(){return a}});var r=n(7294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-1-index-mdx-c2cd84f4a91b4967a8c2.js.map