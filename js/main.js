var app = {

    showAlert: function(message,title){
      if(navigator.notification){
        navigator.notification.alert(message,null,title,'OK');
      }else{
        alert(title ? (title+": "+message) : message);
      }
    },

    initialize: function() {
      //LocalStorageStore()//WebSqlStore()
      var self = this;
      this.store = new MemoryStore(function() {
          self.renderHomeView();
      });

      this.homeTpl = Handlebars.compile($("#home-tpl").html());
      this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());

    }//end initialize

};

app.initialize();
