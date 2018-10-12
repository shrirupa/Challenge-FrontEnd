# Challenge-FrontEnd
The project is a front-end implementation of the challenge.

## Setup and Run

* Have npm installed
  
## Development Starting Point and Framework

* Frontend (ReactJS, CSS, Styled Components)
  
* Backend (Express Server, NodeJS, MongoDB )
  

### Implemented Parts

I have implemented the following three views for application:
#### Doctor View
 - View Appointments
 - Prescribe Medication
 - Prescribed Medication
 #### Patient View
 - Book Appointments
 - View Prescribed Medication
 #### Admin View
 - Delete Doctors from system
 - Edit Patient Info(Under Construction)
 
 #### Other screens in the application are:
 - Login Page
 - Registeration Page



### Login Screen

<p align='center'>
<img src='./images/login.png' width='600' />
</p>

### Registeration Page
<p align='center'>
<img src='./images/register.png' width='600' />
</p>


### Doctor's View - View Appointments
<p align='center'>
<img src='./images/Doctor-View Appnt.png' width='600' />
</p>


### Doctor's View - Prescribe Medication
*Select a record and then click Prescribe Drugs Button to get on this page
<p align='center'>
<img src='./images/DV-Prescribe.png' width='600' />
</p>



### Doctor's View - Already Prescribed Medication
<p align='center'>
<img src='./images/Doctor-View Prescibed.png' width='600' />
</p>


### Patient's View - Book Appointment
<p align='center'>
  <img src='./images/Patient-BookAppnt.png' width='600'  />
</p>

### Patient's View - View Medication
<p align='center'>
  <img src='./images/PV-ViewMedication.png' width='600'  />
</p>

### Admin View - Delete Doctor
* Once the doctor is deleted from the system, that doctor can no longer access the system and also no patient can book appointments with that doctor.
<p align='center'>
  <img src='./images/AV-DeleteDoctor.png' width='600'  />
</p>




### Project Structure
  
    ├── src
    |------components
    |------------Button
    |------------InputField
    |------------LightBox
    |------------Tabs
    |------config
    |------utils
    |------------API
    |------------GlobalState
    |------------Router
    |-------Views
    |-------------Admin
    |-------------Doctor
    |-------------Patient
    |-------------Login
    |-------------Register
    ├── package.json
    



