var body=$response.body;
var obj=JSON.parse(body);

if(obj.responses && obj.responses[0] && obj.responses[0].models && obj.responses[0].models.user){
    var user=obj.responses[0].models.user[0];
    
    // Premium features
    user._isEligibleForFreeTrial=false;
    user._featurePlanType="premium";
    user.type=1;
    
    // Extra features
    user._isConfirmationRequired=false;
    user._canChangeUsername=true;
    user._isEligibleForStudentReferralsProgram=true;
    user._canSendDataFromGTMToAdNetworks=true;
    
    // Age restrictions
    user._isUnderAge=false;
    user._isUnderAgeForAds=false;
    user._needsChildDirectedTreatment=false;
}

$done({body:JSON.stringify(obj)});
