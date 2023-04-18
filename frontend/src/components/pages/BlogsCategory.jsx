import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router";
import { connect } from "react-redux";

import Footer from "../components/Footer";
import ECard from "../components/ECard";


function BlogsCategory(props) {
  const { categoryBlogs } = props;
  const navigate = useNavigate();
  
  const handleOnClick = (id) => {
    navigate("/blogs");
  };
  return (
    categoryBlogs? (
      <div style={{ overflowX: "hidden" }}>
      {/*Our Latest Blogs */}
      <Box pt={10} px={10} spacing={3} display="flex" alignItems="center">
        <IconButton onClick={handleOnClick}>
          <ArrowBackIcon style={{ fontSize: 60 }} sx={{ m: 5 }} />
        </IconButton>

        <Typography variant="h3" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
          placeholder
        </Typography>
      </Box>

      {/*Blogs Grid */}
      <Grid container spacing={10} alignContent="center" justifyContent="center" pt={10} px={10} pb={20}>
        {categoryBlogs.map((blog) => (
          <Grid item xs="auto">
            <ECard variant="blog" blog={blog}/>
          </Grid>
        ))}
      </Grid>
      <Footer></Footer>
    </div>
    ): null 
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  categoryBlogs: state.auth.categoryBlogs,
});

export default connect(mapStateToProps)(BlogsCategory);
