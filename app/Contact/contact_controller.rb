require 'rho/rhocontroller'
require 'helpers/browser_helper'
require 'json'

class ContactController < Rho::RhoController
  include BrowserHelper

  # GET /Contact
  def index
    p "-----------------index========"
    @contacts = Contact.find(:all)
    temp = []
        @contacts.each do |contact|
          temp << { 
                    :name => contact.name,
                    :email => contact.email,
                    :message => contact.message,
                    :id => contact.object 
                  }
        end
    
    json = {:success => true, :data => temp}
      p json,"--------------------json--------"
    
        do_ajax json
  end
  def do_ajax(json)  
      @response['headers']['Content-Type'] = 'application/json;charset=utf-8'
      render :string => ::JSON.generate(json), :use_layout_on_ajax => true
    end
    
    
  # GET /Contact/{1}
  def show
    @contact = Contact.find(@params['id'])
    if @contact
      render :action => :show, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # GET /Contact/new
  def new
   
    @contact = Contact.new
    render :action => :new, :back => url_for(:action => :index)
  end

  # GET /Contact/{1}/edit
  def edit
    @contact = Contact.find(@params['id'])
    p @contact,"------------contact--------------"
    if @contact
      render :action => :edit, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # POST /Contact/create
  def create
    p "**********create******111111*********"
    p @params["name"]
    
    @contact = Contact.create({'name'=>@params["name"],'email'=>@params["email"],'message'=>@params["message"]})
    
    p @contact,"----------------contact----------------"
    
  end

  # POST /Contact/{1}/update
  def update
    @contact = Contact.find(@params['id'])
    @contact.update_attributes(@params['contact']) if @contact
    redirect :action => :index
  end

  # POST /Contact/{1}/delete
  def delete
    @contact = Contact.find(@params['id'])
    @contact.destroy if @contact
    redirect :action => :index  
  end
end
