var app = {

    findByName: function() {
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length,
                fullName, e;

            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                fullName = e.firstName + ' ' + e.lastName;

                $('.employee-list').append('<li><a href="#" onclick="javascript:app.showAlert(\''+fullName+'\')" >' + fullName + '</a></li>');
            }
        });
    },

    showAlert: function(message){
      var title = 'Title';

      if(navigator.notification){
        navigator.notification.alert(message,null,title,'OK');
      }else{
        alert(title+": "+message);
      }
    },

    initialize: function() {
      //LocalStorageStore()//WebSqlStore()
        this.store = new MemoryStore();
        $('.search-key').on('keyup', $.proxy(this.findByName, this));

        $('.search-key').trigger('keyup');
    }

};

app.initialize();
