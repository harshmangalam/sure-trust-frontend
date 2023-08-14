import axios from "axios";

async function getBloodDonation(){
    return await axios.get("/community/blood_donate/")
}


export {
    getBloodDonation
}