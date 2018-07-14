using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalResume.Model
{
    [Serializable]
    public static class myAttributes
    {
        public static string CName = "刘旻";
        public static string EName = "Min";
        public static string Sex = "Male";
        public static int Age = 25;
        public static double Height = 178.2;
        public static double Weight = 57.6;
        public static DateTime Birthday = DateTime.Parse("1993-09-17");
        public static bool IsMarried = false;
        public static string Education = "本科";
        public static string Major = "信息管理与信息系统";
        public static string Phone = "15921011940";
    }
}