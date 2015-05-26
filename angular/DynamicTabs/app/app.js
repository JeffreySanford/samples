var tabApp = angular.module('TabbedApplication', []);

tabApp.controller("TabsParentController", function ($scope) {
  var setAllInactive = function() {
    angular.forEach($scope.workspaces, function(workspace) {
        workspace.active = false;
    });
  };

  var addNewWorkspace = function() {
    var id = $scope.workspaces.length + 1;
    $scope.workspaces.push({
        id: id,
        name: "Workspace " + id,
        active: true
    });
  };

  $scope.workspaces =
  [
      { id: 1, name: "Workspace 1", active:true  },
      { id: 2, name: "Workspace 2", active:false }
  ];

  $scope.addWorkspace = function () {
      setAllInactive();
      addNewWorkspace();
  };
});
