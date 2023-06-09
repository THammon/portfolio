import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Home from './Home';
import Projects from './Projects';
import Testimonials from './Testimonials';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';


const drawerWidth = 240;

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Tristen Hammon
      </Typography>
      <Divider />
      <List>
        <ListItemButton>
          <ListItem>
            <Home/>
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <About/>
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <Projects/>
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <Skills/>
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <Testimonials/>
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <Contact/>
          </ListItem>
        </ListItemButton>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Tristen Hammon
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button  sx={{ color: '#fff' }}>
                <Home/>
              </Button>
              <Button  sx={{ color: '#fff' }}>
                <About/>
              </Button>
              <Button  sx={{ color: '#fff' }}>
                <Projects/>
              </Button>
              <Button  sx={{ color: '#fff' }}>
                <Testimonials/>
              </Button>
              <Button  sx={{ color: '#fff' }}>
                <Skills/>
              </Button>
              <Button  sx={{ color: '#fff' }}>
                <Contact/>
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
