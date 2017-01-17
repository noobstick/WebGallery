using MyWebGallery.Models;
using System;
using System.Collections.Generic;
using System.IO;
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
            DirectoryInfo d = new DirectoryInfo(@"C:\Users\sniperxp716\Documents\Visual Studio 2015\Projects\MyWebGallery\MyWebGallery\assets\img");
            var imageNames = d.GetFiles("*.jpg");
            List<Image> test = new List<Image>();
            foreach (FileInfo image in imageNames) {

                test.Add(new Image { Id = 1, Name = image.Name, CreatedDate = DateTime.Now});
            }
            return test;    
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
