let package_type = "express";

switch (package_type) {
    case "standard":
        console.log("3-5 days");
        break;

    case "express":
        console.log("1-2 days");
        break;
    
    case "overnight":
        console.log("nextday");
        break;
    
    default:
        console.log("Invalid package type");
        break;
}