import {gql} from 'react-apollo';

export default {
    query:{

    },
    mutation:{
        updateProfile: gql`
        mutation(
          $firstName: String,
          $lastName: String,
          $city: String,
          $country: String,
          $phoneNumber: String",
          $email: String,
          $linkedinAddress: String,
          $businessWebsite: String,
        ){
            updateProfile(
              firstName: $firstName,
              lastName: $lastName,
              city: $city,
              country: $country,
              phoneNumber: $phoneNumber,
              email: $email,
              linkedinAddress: $linkedinAddress,
              businessWebsite: $businessWebsite,
            )
        }
      ` 
    }
}