import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = function() {
    return (
    	<div className="ui container comments">
	    	<ApprovalCard>
		    	<CommentDetail author="Sam" avatar={faker.image.avatar()} />
	    	</ApprovalCard>
	    	<ApprovalCard>
			    <CommentDetail author="Becky" avatar={faker.image.avatar()} />
		    </ApprovalCard>
		    <ApprovalCard>
		    	<CommentDetail author="Tom" avatar={faker.image.avatar()} />
	    	</ApprovalCard>
    	</div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);