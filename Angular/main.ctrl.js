angular.module('app').controller("MainController", function(){
    var arti = this;
    arti.title = 'Calendar';
    arti.searchInput = '';
    arti.shows = [
        {
            title: 'FC Barcelona vs Manchester United',
            year: 2015,
            favorite: true
        },
        {
            title: 'Chelsea vs FC Barcelona',
            year: 2015,
            favorite: false
        },
        {
            title: 'Real Madrid CF vs FC Barcelona',
            year: 2014,
            favorite: true
        },
        {
            title: 'Arsenal vs Liverpool',
            year: 2013,
            favorite: true
        },
        {
            title: 'Manchester United vs Arsenal',
            year: 2012,
            favorite: false
        }
    ];
    arti.orders = [
        {
            id: 1,
            title: 'Year Ascending',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            title: 'Year Descending',
            key: 'year',
            reverse: true
        },
        {
            id: 3,
            title: 'Title Ascending',
            key: 'title',
            reverse: false
        },
        {
            id: 4,
            title: 'Title Descending',
            key: 'title',
            reverse: true
        }
    ];
    arti.order = arti.orders[0];
    arti.new = {};
    arti.addShow = function() {
        arti.shows.push(arti.new);
        arti.new = {};
    };
});
