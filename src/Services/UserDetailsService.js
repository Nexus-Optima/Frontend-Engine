export const fetchUserDetails = async ({userEmail}) =>{

    try {
        const response_userdetails = await fetch(
          `${process.env.REACT_APP_BACKEND}/get_details?email=${userEmail}`
        );
        const userDetails = await response_userdetails.json();
        return userDetails
     
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
}