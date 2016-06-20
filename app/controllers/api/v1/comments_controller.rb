class Api::V1::CommentsController < ApplicationController
  def index
    tweet = Tweet.find(params[:tweet_id])
    @comments = tweet.comments
  end

  def create
    @comment = Comment.create(text: comment_params[:text], tweet_id: comment_params[:tweet_id], user_id: current_user.id)
    @comments = Tweet.find(params[:tweet_id]).comments
    render :show, status: :created
  end

  private

  def comment_params
    params.permit(:text, :tweet_id)
  end
end
