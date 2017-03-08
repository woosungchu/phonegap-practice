var HomeView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
    };

    this.findByName = function() {
        store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(HomeView.liTemplate(employees));
        });
    };

    this.render = function() {
        this.el.html(HomeView.template());
        return this;
    };

    initialize: function() {
        var self = this;
        this.store = new MemoryStore(function() {
            $('body').html(new HomeView(self.store).render().el);
        });
    }

}

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());
