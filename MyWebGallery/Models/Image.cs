﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebGallery.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}