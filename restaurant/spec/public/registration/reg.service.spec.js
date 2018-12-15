describe('Registration Service', function() {
    'use strict';
  
    var categoryCheckService;
    var $httpBackend;
    var ApiPath;
    var lunch = {
        "id":1,
        "short_name":"L",
        "name":"Lunch",
        "special_instructions":"Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
        "created_at":"2017-12-06T08:46:53.646Z",
        "updated_at":"2017-12-06T08:46:53.646Z"
    };

    beforeEach(function(){
        module('public');

        inject(function($injector){
            $httpBackend = $injector.get('$httpBackend');
            categoryCheckService = $injector.get('CategoryCheckService');            
            ApiPath = $injector.get('ApiPath');
        });
    });

    it('should return some data', function(){
        $httpBackend.whenGET(ApiPath + "/categories/L.json").respond(lunch);
        categoryCheckService.categoryExists("L").then(function(response){
            expect(response.data).toEqual(lunch);
        });
        $httpBackend.flush();
    });
   
  });
  