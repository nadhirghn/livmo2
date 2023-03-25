import React, { useState, useEffect } from 'react';



//MUI IMPORTS
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './becomehost.scss'
 //
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { HostRegister, clearErrors } from "../../../../actions/userActions";


import { useHistory } from 'react-router-dom';



const EssentialInformation = ({ compteFormValues, informationFormValues,  essinformationFormValues, changeEssInformationValue }) => {
  
	
	
	//Save 
  const history = useHistory();

  const { user } = useSelector(state => state.auth);

  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(state => state.auth);

  useEffect(() => {

	if(isAuthenticated) {
		//history.push('/');
		alert.success('Inscription Réussie.');
	}
  

  if(error) {
	  alert.error(error);
	  dispatch(clearErrors());
	  
  }
}, [dispatch, alert, isAuthenticated, error, history])

const HandleSubmit = (e) => { 
  

    const formData = new FormData();
    formData.set('typehost', compteFormValues.typehost);
    formData.set('name', informationFormValues.name);
    formData.set('phone', informationFormValues.phone);
    formData.set('email', informationFormValues.email);
    formData.set('country', essinformationFormValues.country);
    formData.set('city', essinformationFormValues.city);
    formData.set('password', informationFormValues.password);
    formData.set('address',essinformationFormValues.address);
    formData.set('codepostale', essinformationFormValues.codepostale);
    formData.set('avatar', informationFormValues.avatarPreview);
    formData.set('cin', essinformationFormValues.setCin);
    formData.set('patente', essinformationFormValues.setPatente);



    dispatch(HostRegister(formData));
  

};

  const ITEM_HEIGHT = 30;
  const ITEM_PADDING_TOP = 0;

  

  function getStyles(name, governorat) {
    return {
      fontWeight:
      governorat.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const  theme = createTheme({
	shape: {
	  borderRadius: 40,
	},
  }) 

  const [governorate, setGovernourat] = useState('');




  const color = "#fff"
  const colors = "#E42651"


    const onChangeee = e => {
        const reader = new FileReader();
    
        reader.onload = () => {
            if (reader.readyState === 2) {
				changeEssInformationValue('cinPreview', reader.result)
                essinformationFormValues.setCin = reader.result
                changeEssInformationValue('namecin', e.target.files[0].name)
                
            }
     
        }
    
        reader.readAsDataURL(e.target.files[0])

    }
    const onChangee = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
				changeEssInformationValue('patentePreview', reader.result)
                essinformationFormValues.setPatente = reader.result
                changeEssInformationValue('namee', e.target.files[0].name)
            }
     
        }
    
        reader.readAsDataURL(e.target.files[0])

    }
	const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const onSelect = (e,options) => {
     changeEssInformationValue('country', options.label)
     essinformationFormValues.country=options.label
     changeEssInformationValue('e', options)


    };

  return (
	<React.Fragment>
	{/* Verify Dialog */}
	<React.Fragment>

<div>
<BootstrapDialog
onClose={handleClose}
aria-labelledby="customized-dialog-title"
open={open}
fullWidth
maxWidth="100%"
>
<BootstrapDialogTitle
style={{color: "#E42651"}} id="customized-dialog-title" onClose={handleClose}>
BECOME A HOST : Confirmation
</BootstrapDialogTitle>
<DialogContent dividers>
<Grid container   spacing={4} component="form"  onSubmit={HandleSubmit}
 >
        <Grid  item xs={12}  >		
        <Typography  style={{ color:"black", textAlign: "center", marginRight:"6rem" }}>Photo :</Typography> 

	<div className='form-group'   style={{display:"flex", alignItems:"center", justifyContent:"center"}}>  
                                    <figure className='avat mr-3 item-rtl'>
                                        <img
                                            src={informationFormValues.avatarPreview}
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        />
                                    </figure>
                                </div>
                                </Grid>
      <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left" }}>Type of Host :</Typography> 
         <p>{compteFormValues.typehost}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Full Name :  </Typography> 
          {informationFormValues.name}
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Phone Number :</Typography> 
         {informationFormValues.phone}
      
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Email :</Typography> 
         {informationFormValues.email}
         
        </Grid>
    
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Country :</Typography> 
       
        <p>{essinformationFormValues.country}</p>
        
        
        </Grid>

        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Governorate : </Typography> 
         {essinformationFormValues.city}
          
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Address :</Typography> 
         {essinformationFormValues.address}
         
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>ZIP Code :</Typography> 
         {essinformationFormValues.codepostale}
         
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography  style={{ color:"black" ,textAlign:"left"}}>Copy of License :</Typography>                              
       <p>{essinformationFormValues.namee}</p>
        </Grid>

        <br/>
        <Grid  item xs={12} md={4} >			
      <Typography  style={{ color:"black", textAlign: "left" }}>Copy of your ID card :</Typography> 
     <p>{essinformationFormValues.namecin}</p>
		  				</Grid>

  


      </Grid>
</DialogContent>
        <DialogActions>
        <ThemeProvider theme={theme}>
           <Button onClick={HandleSubmit}
                    type="submit" 
                    variant="contained"
                    style={{textTransform: 'none', background: "linear-gradient(#F02F32,#DA1D6C)", width: '12%',height:'30%'}}
                  >
                      Confirm
                  </Button>
                  </ThemeProvider>
        </DialogActions>
      </BootstrapDialog>
	  </div>
	  </React.Fragment>
    <React.Fragment>
      <Grid container  style={{textAlign: "center" }} spacing={4}>
	  <Grid  item xs={12}  md={4}>			
      <div style={{textAlign: "left" }}>
      <Typography  style={{ color:"black", textAlign: "left" }}>Add Copy of your ID card :</Typography> 
              <div className="file has-name is-left">
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"black" }}
                  name='patente'
                  accept='image/*,application/pdf' 
                  onChange={onChangeee} />
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span className="file-name" style={{ color:"black" }}>
                    {essinformationFormValues.namecin}
                    </span>
  

                </label>
                        </div>
                </div>
		  				</Grid>
      <Grid item xs={12} md={4}>
      <Typography  style={{ color:"black", textAlign: "left", }}>Country :</Typography> 
          {/*	 <div>{`value: ${country.label !== null ? `'${country.label}'` : 'null'}`}</div> */}
			<Autocomplete
      id="country-select-demo"
	  value={essinformationFormValues.e}
	  onChange={onSelect} 
      sx={{ width: '100%', color:'black' , backgroundColor:"white" }}
      options={countries}
	  size="small"
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label}  
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
		  sx={{
			label: { color },
      color:"white"
		  }}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography  style={{ color:"black", textAlign: "left", }}>Governorate :</Typography> 

        <FormControl sx={{ width: "100%", }} size="small">
        <Select				
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
		  value={essinformationFormValues.city}
		  onChange={(e) => changeEssInformationValue('city', e.target.value)} 
          input={<OutlinedInput  />}
          MenuProps={MenuProps}
          style={{backgroundColor:"white"}}
        >
          {states.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, governorate, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
</FormControl>
        </Grid>
    
              <Grid item xs={12} md={4}>
            <div>
        <Typography  style={{ color:"black" ,textAlign:"left"}}>Add Copy of your license :</Typography>                              
 
                <div className="file has-name is-left">
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"black" }}
                  name='patente'
                  accept='image/*,application/pdf' 
                  onChange={onChangee} />
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span className="file-name" style={{ color:"black" }}>
                    {essinformationFormValues.namee}
                    </span>
  

                </label>
                        </div>
                            </div>
    
        </Grid>
		<Grid item xs={12} md={4} >
        <Typography  style={{ color:"black", textAlign: "left", }}>Address :</Typography> 
 
          <TextField
        id="input-with-icon-textfield"
		name="address"
		value={essinformationFormValues.address}
        onChange={(e) => changeEssInformationValue('address', e.target.value)} 
        sx={{
          background:color,
          svg: { colors },
          input: { colors },
          label: { colors },
          width:"100%",
          textAlign: "left",
        }}
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
				   <HomeIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
		
              />
         
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>ZIP Code :</Typography> 
   
          <TextField
        id="input-with-icon-textfield"
		name="zipcode"
		value={essinformationFormValues.codepostale}
        onChange={(e) => changeEssInformationValue('codepostale', e.target.value)} 
        sx={{
          background:color,
          svg: { colors },
          input: { colors },
          label: { colors },
          width:"100%",
          textAlign: "left",
        }}
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
				   <MarkunreadMailboxIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        type="Number"
        variant="standard"
	
              />
        </Grid>

      </Grid>
      <br/>
	<br/>
	<br/>



    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>


    <ThemeProvider theme={theme}>
             <Button
            onClick={handleClickOpen}
             sx={{ mr: 3 }}
             variant="contained"
             style={{textTransform: 'none',
              background: "linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)",
             borderRadius: "19.546px", width: '12%',height:'20%'}}
           >
             Verify
           </Button>

           <Button
                     onClick={HandleSubmit}
                    type="submit" 
                    variant="contained"
                    style={{textTransform: 'none', background: "linear-gradient(#F02F32,#DA1D6C)", width: '12%',height:'20%'}}
                  >
                      Confirm
                  </Button>
                  </ThemeProvider>
                  </Box>
    </React.Fragment>
    </React.Fragment>

  );
}

export default EssentialInformation




const countries = [
	{ code: 'AD', label: 'Andorra', phone: '376' },
	{
	  code: 'AE',
	  label: 'United Arab Emirates',
	  phone: '971',
	},
	{ code: 'AF', label: 'Afghanistan', phone: '93' },
	{
	  code: 'AG',
	  label: 'Antigua and Barbuda',
	  phone: '1-268',
	},
	{ code: 'AI', label: 'Anguilla', phone: '1-264' },
	{ code: 'AL', label: 'Albania', phone: '355' },
	{ code: 'AM', label: 'Armenia', phone: '374' },
	{ code: 'AO', label: 'Angola', phone: '244' },
	{ code: 'AQ', label: 'Antarctica', phone: '672' },
	{ code: 'AR', label: 'Argentina', phone: '54' },
	{ code: 'AS', label: 'American Samoa', phone: '1-684' },
	{ code: 'AT', label: 'Austria', phone: '43' },
	{
	  code: 'AU',
	  label: 'Australia',
	  phone: '61',
	  suggested: true,
	},
	{ code: 'AW', label: 'Aruba', phone: '297' },
	{ code: 'AX', label: 'Alland Islands', phone: '358' },
	{ code: 'AZ', label: 'Azerbaijan', phone: '994' },
	{
	  code: 'BA',
	  label: 'Bosnia and Herzegovina',
	  phone: '387',
	},
	{ code: 'BB', label: 'Barbados', phone: '1-246' },
	{ code: 'BD', label: 'Bangladesh', phone: '880' },
	{ code: 'BE', label: 'Belgium', phone: '32' },
	{ code: 'BF', label: 'Burkina Faso', phone: '226' },
	{ code: 'BG', label: 'Bulgaria', phone: '359' },
	{ code: 'BH', label: 'Bahrain', phone: '973' },
	{ code: 'BI', label: 'Burundi', phone: '257' },
	{ code: 'BJ', label: 'Benin', phone: '229' },
	{ code: 'BL', label: 'Saint Barthelemy', phone: '590' },
	{ code: 'BM', label: 'Bermuda', phone: '1-441' },
	{ code: 'BN', label: 'Brunei Darussalam', phone: '673' },
	{ code: 'BO', label: 'Bolivia', phone: '591' },
	{ code: 'BR', label: 'Brazil', phone: '55' },
	{ code: 'BS', label: 'Bahamas', phone: '1-242' },
	{ code: 'BT', label: 'Bhutan', phone: '975' },
	{ code: 'BV', label: 'Bouvet Island', phone: '47' },
	{ code: 'BW', label: 'Botswana', phone: '267' },
	{ code: 'BY', label: 'Belarus', phone: '375' },
	{ code: 'BZ', label: 'Belize', phone: '501' },
	{
	  code: 'CA',
	  label: 'Canada',
	  phone: '1',
	  suggested: true,
	},
	{
	  code: 'CC',
	  label: 'Cocos (Keeling) Islands',
	  phone: '61',
	},
	{
	  code: 'CD',
	  label: 'Congo, Democratic Republic of the',
	  phone: '243',
	},
	{
	  code: 'CF',
	  label: 'Central African Republic',
	  phone: '236',
	},
	{
	  code: 'CG',
	  label: 'Congo, Republic of the',
	  phone: '242',
	},
	{ code: 'CH', label: 'Switzerland', phone: '41' },
	{ code: 'CI', label: "Cote d'Ivoire", phone: '225' },
	{ code: 'CK', label: 'Cook Islands', phone: '682' },
	{ code: 'CL', label: 'Chile', phone: '56' },
	{ code: 'CM', label: 'Cameroon', phone: '237' },
	{ code: 'CN', label: 'China', phone: '86' },
	{ code: 'CO', label: 'Colombia', phone: '57' },
	{ code: 'CR', label: 'Costa Rica', phone: '506' },
	{ code: 'CU', label: 'Cuba', phone: '53' },
	{ code: 'CV', label: 'Cape Verde', phone: '238' },
	{ code: 'CW', label: 'Curacao', phone: '599' },
	{ code: 'CX', label: 'Christmas Island', phone: '61' },
	{ code: 'CY', label: 'Cyprus', phone: '357' },
	{ code: 'CZ', label: 'Czech Republic', phone: '420' },
	{
	  code: 'DE',
	  label: 'Germany',
	  phone: '49',
	  suggested: true,
	},
	{ code: 'DJ', label: 'Djibouti', phone: '253' },
	{ code: 'DK', label: 'Denmark', phone: '45' },
	{ code: 'DM', label: 'Dominica', phone: '1-767' },
	{
	  code: 'DO',
	  label: 'Dominican Republic',
	  phone: '1-809',
	},
	{ code: 'DZ', label: 'Algeria', phone: '213' },
	{ code: 'EC', label: 'Ecuador', phone: '593' },
	{ code: 'EE', label: 'Estonia', phone: '372' },
	{ code: 'EG', label: 'Egypt', phone: '20' },
	{ code: 'EH', label: 'Western Sahara', phone: '212' },
	{ code: 'ER', label: 'Eritrea', phone: '291' },
	{ code: 'ES', label: 'Spain', phone: '34' },
	{ code: 'ET', label: 'Ethiopia', phone: '251' },
	{ code: 'FI', label: 'Finland', phone: '358' },
	{ code: 'FJ', label: 'Fiji', phone: '679' },
	{
	  code: 'FK',
	  label: 'Falkland Islands (Malvinas)',
	  phone: '500',
	},
	{
	  code: 'FM',
	  label: 'Micronesia, Federated States of',
	  phone: '691',
	},
	{ code: 'FO', label: 'Faroe Islands', phone: '298' },
	{
	  code: 'FR',
	  label: 'France',
	  phone: '33',
	  suggested: true,
	},
	{ code: 'GA', label: 'Gabon', phone: '241' },
	{ code: 'GB', label: 'United Kingdom', phone: '44' },
	{ code: 'GD', label: 'Grenada', phone: '1-473' },
	{ code: 'GE', label: 'Georgia', phone: '995' },
	{ code: 'GF', label: 'French Guiana', phone: '594' },
	{ code: 'GG', label: 'Guernsey', phone: '44' },
	{ code: 'GH', label: 'Ghana', phone: '233' },
	{ code: 'GI', label: 'Gibraltar', phone: '350' },
	{ code: 'GL', label: 'Greenland', phone: '299' },
	{ code: 'GM', label: 'Gambia', phone: '220' },
	{ code: 'GN', label: 'Guinea', phone: '224' },
	{ code: 'GP', label: 'Guadeloupe', phone: '590' },
	{ code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
	{ code: 'GR', label: 'Greece', phone: '30' },
	{
	  code: 'GS',
	  label: 'South Georgia and the South Sandwich Islands',
	  phone: '500',
	},
	{ code: 'GT', label: 'Guatemala', phone: '502' },
	{ code: 'GU', label: 'Guam', phone: '1-671' },
	{ code: 'GW', label: 'Guinea-Bissau', phone: '245' },
	{ code: 'GY', label: 'Guyana', phone: '592' },
	{ code: 'HK', label: 'Hong Kong', phone: '852' },
	{
	  code: 'HM',
	  label: 'Heard Island and McDonald Islands',
	  phone: '672',
	},
	{ code: 'HN', label: 'Honduras', phone: '504' },
	{ code: 'HR', label: 'Croatia', phone: '385' },
	{ code: 'HT', label: 'Haiti', phone: '509' },
	{ code: 'HU', label: 'Hungary', phone: '36' },
	{ code: 'ID', label: 'Indonesia', phone: '62' },
	{ code: 'IE', label: 'Ireland', phone: '353' },
	{ code: 'IM', label: 'Isle of Man', phone: '44' },
	{ code: 'IN', label: 'India', phone: '91' },
	{
	  code: 'IO',
	  label: 'British Indian Ocean Territory',
	  phone: '246',
	},
	{ code: 'IQ', label: 'Iraq', phone: '964' },
	{
	  code: 'IR',
	  label: 'Iran, Islamic Republic of',
	  phone: '98',
	},
	{ code: 'IS', label: 'Iceland', phone: '354' },
	{ code: 'IT', label: 'Italy', phone: '39' },
	{ code: 'JE', label: 'Jersey', phone: '44' },
	{ code: 'JM', label: 'Jamaica', phone: '1-876' },
	{ code: 'JO', label: 'Jordan', phone: '962' },
	{
	  code: 'JP',
	  label: 'Japan',
	  phone: '81',
	  suggested: true,
	},
	{ code: 'KE', label: 'Kenya', phone: '254' },
	{ code: 'KG', label: 'Kyrgyzstan', phone: '996' },
	{ code: 'KH', label: 'Cambodia', phone: '855' },
	{ code: 'KI', label: 'Kiribati', phone: '686' },
	{ code: 'KM', label: 'Comoros', phone: '269' },
	{
	  code: 'KN',
	  label: 'Saint Kitts and Nevis',
	  phone: '1-869',
	},
	{
	  code: 'KP',
	  label: "Korea, Democratic People's Republic of",
	  phone: '850',
	},
	{ code: 'KR', label: 'Korea, Republic of', phone: '82' },
	{ code: 'KW', label: 'Kuwait', phone: '965' },
	{ code: 'KY', label: 'Cayman Islands', phone: '1-345' },
	{ code: 'KZ', label: 'Kazakhstan', phone: '7' },
	{
	  code: 'LA',
	  label: "Lao People's Democratic Republic",
	  phone: '856',
	},
	{ code: 'LB', label: 'Lebanon', phone: '961' },
	{ code: 'LC', label: 'Saint Lucia', phone: '1-758' },
	{ code: 'LI', label: 'Liechtenstein', phone: '423' },
	{ code: 'LK', label: 'Sri Lanka', phone: '94' },
	{ code: 'LR', label: 'Liberia', phone: '231' },
	{ code: 'LS', label: 'Lesotho', phone: '266' },
	{ code: 'LT', label: 'Lithuania', phone: '370' },
	{ code: 'LU', label: 'Luxembourg', phone: '352' },
	{ code: 'LV', label: 'Latvia', phone: '371' },
	{ code: 'LY', label: 'Libya', phone: '218' },
	{ code: 'MA', label: 'Morocco', phone: '212' },
	{ code: 'MC', label: 'Monaco', phone: '377' },
	{
	  code: 'MD',
	  label: 'Moldova, Republic of',
	  phone: '373',
	},
	{ code: 'ME', label: 'Montenegro', phone: '382' },
	{
	  code: 'MF',
	  label: 'Saint Martin (French part)',
	  phone: '590',
	},
	{ code: 'MG', label: 'Madagascar', phone: '261' },
	{ code: 'MH', label: 'Marshall Islands', phone: '692' },
	{
	  code: 'MK',
	  label: 'Macedonia, the Former Yugoslav Republic of',
	  phone: '389',
	},
	{ code: 'ML', label: 'Mali', phone: '223' },
	{ code: 'MM', label: 'Myanmar', phone: '95' },
	{ code: 'MN', label: 'Mongolia', phone: '976' },
	{ code: 'MO', label: 'Macao', phone: '853' },
	{
	  code: 'MP',
	  label: 'Northern Mariana Islands',
	  phone: '1-670',
	},
	{ code: 'MQ', label: 'Martinique', phone: '596' },
	{ code: 'MR', label: 'Mauritania', phone: '222' },
	{ code: 'MS', label: 'Montserrat', phone: '1-664' },
	{ code: 'MT', label: 'Malta', phone: '356' },
	{ code: 'MU', label: 'Mauritius', phone: '230' },
	{ code: 'MV', label: 'Maldives', phone: '960' },
	{ code: 'MW', label: 'Malawi', phone: '265' },
	{ code: 'MX', label: 'Mexico', phone: '52' },
	{ code: 'MY', label: 'Malaysia', phone: '60' },
	{ code: 'MZ', label: 'Mozambique', phone: '258' },
	{ code: 'NA', label: 'Namibia', phone: '264' },
	{ code: 'NC', label: 'New Caledonia', phone: '687' },
	{ code: 'NE', label: 'Niger', phone: '227' },
	{ code: 'NF', label: 'Norfolk Island', phone: '672' },
	{ code: 'NG', label: 'Nigeria', phone: '234' },
	{ code: 'NI', label: 'Nicaragua', phone: '505' },
	{ code: 'NL', label: 'Netherlands', phone: '31' },
	{ code: 'NO', label: 'Norway', phone: '47' },
	{ code: 'NP', label: 'Nepal', phone: '977' },
	{ code: 'NR', label: 'Nauru', phone: '674' },
	{ code: 'NU', label: 'Niue', phone: '683' },
	{ code: 'NZ', label: 'New Zealand', phone: '64' },
	{ code: 'OM', label: 'Oman', phone: '968' },
	{ code: 'PA', label: 'Panama', phone: '507' },
	{ code: 'PE', label: 'Peru', phone: '51' },
	{ code: 'PF', label: 'French Polynesia', phone: '689' },
	{ code: 'PG', label: 'Papua New Guinea', phone: '675' },
	{ code: 'PH', label: 'Philippines', phone: '63' },
	{ code: 'PK', label: 'Pakistan', phone: '92' },
	{ code: 'PL', label: 'Poland', phone: '48' },
	{
	  code: 'PM',
	  label: 'Saint Pierre and Miquelon',
	  phone: '508',
	},
	{ code: 'PN', label: 'Pitcairn', phone: '870' },
	{ code: 'PR', label: 'Puerto Rico', phone: '1' },
	{
	  code: 'PS',
	  label: 'Palestine, State of',
	  phone: '970',
	},
	{ code: 'PT', label: 'Portugal', phone: '351' },
	{ code: 'PW', label: 'Palau', phone: '680' },
	{ code: 'PY', label: 'Paraguay', phone: '595' },
	{ code: 'QA', label: 'Qatar', phone: '974' },
	{ code: 'RE', label: 'Reunion', phone: '262' },
	{ code: 'RO', label: 'Romania', phone: '40' },
	{ code: 'RS', label: 'Serbia', phone: '381' },
	{ code: 'RU', label: 'Russian Federation', phone: '7' },
	{ code: 'RW', label: 'Rwanda', phone: '250' },
	{ code: 'SA', label: 'Saudi Arabia', phone: '966' },
	{ code: 'SB', label: 'Solomon Islands', phone: '677' },
	{ code: 'SC', label: 'Seychelles', phone: '248' },
	{ code: 'SD', label: 'Sudan', phone: '249' },
	{ code: 'SE', label: 'Sweden', phone: '46' },
	{ code: 'SG', label: 'Singapore', phone: '65' },
	{ code: 'SH', label: 'Saint Helena', phone: '290' },
	{ code: 'SI', label: 'Slovenia', phone: '386' },
	{
	  code: 'SJ',
	  label: 'Svalbard and Jan Mayen',
	  phone: '47',
	},
	{ code: 'SK', label: 'Slovakia', phone: '421' },
	{ code: 'SL', label: 'Sierra Leone', phone: '232' },
	{ code: 'SM', label: 'San Marino', phone: '378' },
	{ code: 'SN', label: 'Senegal', phone: '221' },
	{ code: 'SO', label: 'Somalia', phone: '252' },
	{ code: 'SR', label: 'Suriname', phone: '597' },
	{ code: 'SS', label: 'South Sudan', phone: '211' },
	{
	  code: 'ST',
	  label: 'Sao Tome and Principe',
	  phone: '239',
	},
	{ code: 'SV', label: 'El Salvador', phone: '503' },
	{
	  code: 'SX',
	  label: 'Sint Maarten (Dutch part)',
	  phone: '1-721',
	},
	{
	  code: 'SY',
	  label: 'Syrian Arab Republic',
	  phone: '963',
	},
	{ code: 'SZ', label: 'Swaziland', phone: '268' },
	{
	  code: 'TC',
	  label: 'Turks and Caicos Islands',
	  phone: '1-649',
	},
	{ code: 'TD', label: 'Chad', phone: '235' },
	{
	  code: 'TF',
	  label: 'French Southern Territories',
	  phone: '262',
	},
	{ code: 'TG', label: 'Togo', phone: '228' },
	{ code: 'TH', label: 'Thailand', phone: '66' },
	{ code: 'TJ', label: 'Tajikistan', phone: '992' },
	{ code: 'TK', label: 'Tokelau', phone: '690' },
	{ code: 'TL', label: 'Timor-Leste', phone: '670' },
	{ code: 'TM', label: 'Turkmenistan', phone: '993' },
	{ code: 'TN', label: 'Tunisia', phone: '216' },
	{ code: 'TO', label: 'Tonga', phone: '676' },
	{ code: 'TR', label: 'Turkey', phone: '90' },
	{
	  code: 'TT',
	  label: 'Trinidad and Tobago',
	  phone: '1-868',
	},
	{ code: 'TV', label: 'Tuvalu', phone: '688' },
	{
	  code: 'TW',
	  label: 'Taiwan, Province of China',
	  phone: '886',
	},
	{
	  code: 'TZ',
	  label: 'United Republic of Tanzania',
	  phone: '255',
	},
	{ code: 'UA', label: 'Ukraine', phone: '380' },
	{ code: 'UG', label: 'Uganda', phone: '256' },
	{
	  code: 'US',
	  label: 'United States',
	  phone: '1',
	  suggested: true,
	},
	{ code: 'UY', label: 'Uruguay', phone: '598' },
	{ code: 'UZ', label: 'Uzbekistan', phone: '998' },
	{
	  code: 'VA',
	  label: 'Holy See (Vatican City State)',
	  phone: '379',
	},
	{
	  code: 'VC',
	  label: 'Saint Vincent and the Grenadines',
	  phone: '1-784',
	},
	{ code: 'VE', label: 'Venezuela', phone: '58' },
	{
	  code: 'VG',
	  label: 'British Virgin Islands',
	  phone: '1-284',
	},
	{
	  code: 'VI',
	  label: 'US Virgin Islands',
	  phone: '1-340',
	},
	{ code: 'VN', label: 'Vietnam', phone: '84' },
	{ code: 'VU', label: 'Vanuatu', phone: '678' },
	{ code: 'WF', label: 'Wallis and Futuna', phone: '681' },
	{ code: 'WS', label: 'Samoa', phone: '685' },
	{ code: 'XK', label: 'Kosovo', phone: '383' },
	{ code: 'YE', label: 'Yemen', phone: '967' },
	{ code: 'YT', label: 'Mayotte', phone: '262' },
	{ code: 'ZA', label: 'South Africa', phone: '27' },
	{ code: 'ZM', label: 'Zambia', phone: '260' },
	{ code: 'ZW', label: 'Zimbabwe', phone: '263' },
  ];

  const states = [
    "Ariana",
    "Béja",
    "Ben Arous",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kébili",
    "Le Kef",
    "Mahdia",
    "La Manouba",
    "Médenine",
    "Monastir",
    "Nabeul",
      "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(8),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(8),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };