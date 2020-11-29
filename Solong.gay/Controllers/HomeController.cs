using System;
using System.Diagnostics;
using Azure.Storage.Queues;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Solong.gay.Models;

namespace Solong.gay.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;

        }

        public IActionResult Index()
        {
            return Redirect("/bowser");
        }

        public IActionResult Paul()
        {
            return View();
        }

        public IActionResult RGBScreen()
        {
#if DEBUG
            ViewBag.IsDebug = true;
#else
            ViewBag.IsDebug = false;
#endif
            return View("RgbScreen");
        }

        [HttpPost]
        public IActionResult RgbScreenPost(string jsonString)
        {
            // Get the connection string from app settings
            string connectionString = Environment.GetEnvironmentVariable("AZURE_QUEUE_CONNECTION_STRING");

            // Instantiate a QueueClient which will be used to create and manipulate the queue
            QueueClient queueClient = new QueueClient(connectionString, "rgbscreenqueue");

            // Create the queue if it doesn't already exist
            queueClient.CreateIfNotExists();

            if (queueClient.Exists())
            {
                // Send a message to the queue
                queueClient.SendMessage(jsonString);
            }

            Console.WriteLine($"Inserted: {jsonString}");

            return new OkResult();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
