using MyWebGallery.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MyWebGallery.Controllers
{
    [RoutePrefix("api/Images")]
    public class ImagesController : ApiController
    {
        Image[] images = new Image[]
        {
            new Image { Id = 1, Name = "Test 1", CreatedDate = DateTime.Now},
            new Image { Id = 2, Name = "Test 2", CreatedDate = DateTime.Now},
            new Image { Id = 3, Name = "Test 3", CreatedDate = DateTime.Now}
        };

        [HttpGet]
        [Route("")]
        public IEnumerable<Image> GetAllImages()
        {
            return images;    
        }

        [HttpGet]
        [Route("{id:int}")]
        public IHttpActionResult GetImage(int Id)
        {
            var image = images.FirstOrDefault(x => x.Id == Id);
            if (image == null)
            {
                return NotFound();
            }
            return Ok(image);
        }
    }
}
