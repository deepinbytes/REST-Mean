angular.module('vaultDragon')
.controller('appController',function($scope,$http){

	$scope.res = null;

	  $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
	
	  $scope.opengit = function(){
            $scope.url='https://github.com/ekhoenix/Rest-Mean';
        };
		
	$scope.AddorUpdate = function(data){
		$scope.dataErr = false;
		$scope.dataKeyErr = false;
		$scope.dataValueErr = false;
		if(!data){
			$scope.dataErr = true;
			return;
		}
		if(!data.key){
			$scope.dataKeyErr = true;
			return;	
		}
		if(!data.value){
			$scope.dataValueErr = true;
			return;	
		}
		var d = new Date().getTime();
		var datajson={
			"_key":data.key,
			"val":data.value,
			
		}
		
		data.timestamp = d;
		$http.post('http://vault-dragon-challenge.herokuapp.com/object/',datajson)
		.then(function(res){
			$scope.res = res;
		});
	}

	$scope.QuerybyVal = function(Query){
		if(!Query){
			$scope.searchErr = true;
			return;
		}
		
		$http.get('http://vault-dragon-challenge.herokuapp.com/object/'+Query.key)
		.then(function(res){
			$scope.res = res;
			$scope.rows= res.data;
			$scope.rows.value = res.data.val;
			console.log(res.data);
		});
	}

	$scope.QuerybyTimestamp = function(Query){
		if(!Query){
			$scope.searchPartErr = true;
			return;
		}		
		$http.get('http://vault-dragon-challenge.herokuapp.com/object/'+Query.key+'?timestamp='+Query.timestamp)
		.then(function(res){
			
			$scope.rowsPart = res.data;
			$scope.rowsPart.value=res.data.val
			console.log(res.data);
		});
	}

});