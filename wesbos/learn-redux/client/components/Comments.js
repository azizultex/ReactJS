import React from 'react';

class Comments extends React.Component {

	constructor(props){
		super(props);
		this.addComment = this.addComment.bind(this);
		this.renderComment = this.renderComment.bind(this);
	}

	addComment(e){
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, comment, author);
		this.refs.commentForm.reset();
	}

	renderComment(comment, i){
		return (
			<div className="comment" key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
				</p>
			</div>
		)
	}

	render(){
		return (
			<div className="comment">
				{ this.props.comments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form" onSubmit={this.addComment}>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
 				</form>
			</div>
		)
	}
}


export default Comments;