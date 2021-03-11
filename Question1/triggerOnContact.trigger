trigger triggerOnContact on Contact (after insert, after update, after delete, after undelete) {
    if(trigger.isUpdate){
    	triggerOnContactHelper.changeNumberOfContactsOnUpdate(trigger.oldMap,trigger.NewMap);
    }
    else if(trigger.isDelete){
        triggerOnContactHelper.changeNumberOfContacts(trigger.old);
    }
    else{
   		triggerOnContactHelper.changeNumberOfContacts(trigger.new);
    }
}