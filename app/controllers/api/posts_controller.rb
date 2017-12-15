class Api::PostsController < ApplicationController
  before_action :find_post, only: [:creat, :delete]
  before_action :authenticate_user!

  def index
    @posts = current_user.posts
    render json: @posts
  end

  def create
    @post = current_user.posts.create(post_params)
    if @post.save
      render json: @post
    else
      render json: {error: @post.errors.full_messages.join(',')}, status: 422
    end
  end

  def delete
    @post.destroy
  end

  private
    def find_post
      params.require(:post).permit(:title, :body)
    end

    def post_params
      @post = Post.find(params[:id])
    end

end
