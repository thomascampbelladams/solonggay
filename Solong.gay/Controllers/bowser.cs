using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Solong.gay.Controllers
{
    public class bowser : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
