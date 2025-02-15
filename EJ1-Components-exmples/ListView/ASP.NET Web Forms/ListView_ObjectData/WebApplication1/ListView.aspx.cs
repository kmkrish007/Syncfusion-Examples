﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class ListView : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
    }

    [Serializable]
    public class ListViewData
    {

        public ListViewData(string _name, string _class, string _designation, string _about)
        {
            this.Name = _name;
            this.Class = _class;
            this.Designation = _designation;
            this.About = _about;
        }
        public ListViewData()
        {

        }

        [Browsable(true)]
        public string Name
        {
            get;
            set;
        }

        [Browsable(true)]
        public string Class
        {
            get;
            set;
        }

        [Browsable(true)]
        public string Designation
        {
            get;
            set;
        }
        [Browsable(true)]
        public string About
        {
            get;
            set;
        }

        public List<ListViewData> GetListItems()
        {
            List<ListViewData> data = new List<ListViewData>();
            data.Add(new ListViewData("Brooke", "brooke", "HR Assistant", "Brooke provides administrative support to the HR office."));
            data.Add(new ListViewData("Claire", "claire", "HR Manager", "Claire is responsible for strategic HR planning and budget."));
            data.Add(new ListViewData("Erik", "erik", "Training Specialist", "Erik notifies attendees and manages follow up."));
            data.Add(new ListViewData("Grace", "grace", "Development Manager", "Grace maintains training plans to achive workforce skill."));
            data.Add(new ListViewData("Jacob", "jacob", "Recruitment Manager", "Jacob manages recruitment and prepares key staffing metrics."));
            return data;
        }
    }
}