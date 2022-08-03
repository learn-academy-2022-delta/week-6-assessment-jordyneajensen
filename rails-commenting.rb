# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is a controller class from the model BlogPost that is being inherited from the application controller.
class BlogPostsController < ApplicationController
  def index
    # ---2) This is a variable declaring all the instances for BlogPost that have been created by way of Active Record Query.
    @posts = BlogPost.all
  end

  # ---3) This is a method defining show, which will allow someone to search BlogPosts by BlogPost ID and display the post with that id by way of Active Query.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This is a method defining new allowing the creation of new Blog posts in a form.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This is an instance variable for creating a new post with columns the user has access too by using Active record query by way of active record query.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) This is an instance variable within a method allowing edits to a Blog Post by finding the blog Post Id first. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) An instance variable within the update method utilizing strong parameters to allow users to update Blog posts.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If the destroy method is not valid, it will redirect to the show page of the post.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) A helper method within rails that only allows anything below this line to be called inside of a class.
  private
  def blog_post_params
    # ---10) Defines parameters to make a blog post, and the columns users have access too: title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end
