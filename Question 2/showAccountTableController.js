({
    doInit : function(component, event, helper) {
        component.set('v.columns', [
                {label: 'Account Name', fieldName: 'Name', type: 'text'},
                {label: 'Website', fieldName: 'Website', type: 'text'},
                {label: 'Employees', fieldName: 'NumberOfEmployees', type: 'number'},
                {label: 'Created Date', fieldName: 'CreatedDate', type: 'Date'}
        	]);
            var action = component.get("c.getRecentlyCreatedAccounts");
          	action.setCallback(this, function(response){
                if(response.getState() == 'SUCCESS'){
                	component.set('v.data',response.getReturnValue());
                }
            });
            $A.enqueueAction(action);	
 	}
})