import React from 'react';
import {mount} from 'react-mounter';

//Layouts
import {MainLayout} from './layouts/MainLayout.jsx';
import {ErrorLayout} from './layouts/ErrorLayout.jsx';

//Wrappers
import ErrorPage from './layouts/ErrorPage.jsx';
import Index from './components/index.jsx';
import Generic from './components/generic.jsx';
import Elements from './components/elements.jsx';


function setBodyClass(){
	$('body').addClass('landing');
}

function unsetBodyClass(){
	$('body').removeClass('landing');
}

FlowRouter.triggers.enter([unsetBodyClass]);

FlowRouter.route('/',{
	action() {
		mount(MainLayout, {
			content: (<Index />)
		})
	},
	triggersEnter: [setBodyClass]
});

FlowRouter.route('/generic',{
	action() {
		mount(MainLayout, {
			content: (<Generic />)
		})
	}
});

FlowRouter.route('/elements',{
	action() {
		mount(MainLayout, {
			content: (<Elements />)
		})
	}
});

FlowRouter.notFound = {
  action() {
    mount(ErrorLayout, {
				content: (<ErrorPage />)
			}
		)
  }
};
