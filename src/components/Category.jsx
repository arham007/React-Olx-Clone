import React from 'react';
import Container from '@material-ui/core/Container'



const Category = () => {
  
  return (
    <>
    <Container >
      <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Vehicles</h3>
              <a className="hover" href="#">Cars</a>
              <a className="hover" href="#">Cars on Installment</a>
              <a className="hover" href="#">Car Accessories</a>
              <a className="hover" href="#">Spare Parts</a>
              <a className="hover" href="#">Buses,Van & Trucks</a>

              <a href="">Rickshaw & Chinchi</a>
              <a href="">Other Vehicles</a>
          </div>

          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Animals</h3>
              <a className="hover" href="#">Birds</a>
              <a className="hover" href="#">Hen & Aseel</a>
              <a className="hover" href="#">Cats</a>
              <a className="hover" href="#">Dogs</a>
              <a className="hover" href="#">Horses</a>

              <a href="">Livestock</a>
              <a href="">Other Animals</a>
          </div>

          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Fashion & Beauty</h3>
              <a className="hover" href="#">Accessories</a>
              <a className="hover" href="#">Clothes</a>
              <a className="hover" href="#">Footwear</a>
              <a className="hover" href="#">Jewellery</a>
              <a className="hover" href="#">MakeUp</a>

              <a href="">Wedding</a>
              <a href="">Other Fashions</a>
          </div>
          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Services</h3>
              <a className="hover" href="#">Education & Classes</a>
              <a className="hover" href="#">Car Rental</a>
              <a className="hover" href="#">Driver & Taxi</a>
              <a className="hover" href="#">Web Development</a>
              <a className="hover" href="#">Farm & Fresh Food</a>

              <a href="">Event Services</a>
              <a href="">Health & Beauty</a>
          </div>

          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Mobiles</h3>
              <a className="hover" href="#">Tablets</a>
              <a className="hover" href="#">Accessories</a>
              <a className="hover" href="#">Mobile Phones</a>
              
          </div>

          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Furniture & Home Decor</h3>
              <a className="hover" href="#">Sofa & Chairs</a>
              <a className="hover" href="#">Bed & Wardrobe</a>
              <a className="hover" href="#">Home Decoration</a>
              <a className="hover" href="#">Table & Dining</a>
              <a className="hover" href="#">Garden & outdoor</a>

              <a href="">Other Furniture</a>
              <a href="">Other Houshold Items</a>
          </div>
          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Property & Rent</h3>
              <a className="hover" href="#">Houses</a>
              <a className="hover" href="#">Appartment & Flats</a>
              <a className="hover" href="#">Portion & Floor </a>
              <a className="hover" href="#">Land & Plots</a>
              <a className="hover" href="#">Rooms</a>

              <a href="">Room mates & Paying Guest</a>
              <a href="">Vacation Rentals</a>
          </div>
          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Books,Sport & Hobbies</h3>
              <a className="hover" href="#">Books & Magzine</a>
              <a className="hover" href="#">Musical Instrument</a>
              <a className="hover" href="#">Sports Equipment</a>
              <a className="hover" href="#">Gym & Fitness</a>
              <a className="hover" href="#">Other Hobbies</a>
          </div>
          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Property for Sale</h3>
              <a className="hover" href="#">Houses</a>
              <a className="hover" href="#">Appartment & Flats</a>
              <a className="hover" href="#">Portion & Floor </a>
              <a className="hover" href="#">Land & Plots</a>
              <a className="hover" href="#">Rooms</a>

              <a href="">Room mates & Paying Guest</a>
              <a href="">Vacation Rentals</a>
          </div>
          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Bikes</h3>
              <a className="hover" href="#">Motorcycles</a>
              <a className="hover" href="#">Spare Parts</a>
              <a className="hover" href="#">Bicycles</a>
              <a className="hover" href="#">ATV & Quads</a>
              <a className="hover" href="#">Scooters</a>

              
          </div>
          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Jobs</h3>
              <a className="hover" href="#">Online</a>
              <a className="hover" href="#">Marketing</a>
              <a className="hover" href="#">Education</a>
              <a className="hover" href="#">It & Networking</a>
              <a className="hover" href="#">Medical</a>
              <a className="hover" href="#">Sales</a>
              <a className="hover" href="#">Accounting & Finance</a>
              <a className="hover" href="#">Part Time - Job</a>
              <a className="hover" href="#">Other Jobs</a>

              
          </div>
          <div style={{display:"flex",flexDirection:"column",flexBasis:"25%"}}>
              <h3 className="heading">Kids</h3>
              <a className="hover" href="#">Kids Furniture</a>
              <a className="hover" href="#">Toys</a>
              <a className="hover" href="#">Params & Wakers</a>
              <a className="hover" href="#">Swings & Slides</a>
              <a className="hover" href="#">Kids Bikes</a>
              <a className="hover" href="#">Kids Accessories</a>

              
          </div>
      </div>
      </Container>
        
        
    

    </>
  );
};

export default Category;