var containsDuplicate = function(nums) {
    let unique = Array.from(new Set( nums ));
    if (unique.length === nums.length) return false
    else return true
};
