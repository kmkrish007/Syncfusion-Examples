﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Syncfusion.JavaScript.Web;
using Syncfusion.EJ.Export;
using System.Collections;
using Syncfusion.XlsIO;


namespace WebApplication1.Grid
{
    public partial class Grid : System.Web.UI.Page
    {
        List<Orders> order = new List<Orders>();
        protected void Page_Load(object sender, EventArgs e)
        {
            BindDataSource();
            Session["InlineEditDataSource"] = order;
        }

        private void BindDataSource()
        {
            if ((List<Orders>)Session["InlineEditDataSource"] == null)
            {
                int orderId = 10643;
                int empId = 0;
                for (int i = 1; i < 9; i++)
                {
                    order.Add(new Orders(orderId + 1, "ALFKI", empId + 1, 32.38, "Alfreds Futterkiste ", "Germany"));
                    order.Add(new Orders(orderId + 2, "ANATR", empId + 2, 11.61, "Ana Trujillo Emparedados y helados", "Mexico"));
                    order.Add(new Orders(orderId + 3, "ANTON", empId + 3, 45.34, "Antonio Moreno Taquería", "Mexico"));
                    order.Add(new Orders(orderId + 4, "AROUT", empId + 4, 37.28, "Around the Horn", "UK"));
                    order.Add(new Orders(orderId + 5, "BERGS", empId + 5, 67.00, "Berglunds snabbköp", "Sweden"));
                    order.Add(new Orders(orderId + 6, "BLONP", empId + 6, 23.32, "Blondel père et fils", "France"));
                    orderId += 6;
                    empId += 6;
                }
            }
            else
            {
                order = (List<Orders>)Session["InlineEditDataSource"];
            }
            this.FlatGrid.DataSource = order;
            this.FlatGrid.DataBind();
        }

        protected void EditEvents_ServerEditRow(object sender, GridEventArgs e)
        {
            EditAction(e.EventType, e.Arguments["data"]);
        }

        protected void EditEvents_ServerAddRow(object sender, GridEventArgs e)
        {
            EditAction(e.EventType, e.Arguments["data"]);
        }

        protected void EditEvents_ServerDeleteRow(object sender, GridEventArgs e)
        {
            EditAction(e.EventType, e.Arguments["data"]);
        }

        protected void EditAction(string eventType, object record)
        {
            List<Orders> data = Session["InlineEditDataSource"] as List<Orders>;
            Dictionary<string, object> KeyVal = record as Dictionary<string, object>;
            if (eventType == "endEdit")
            {
                Orders value = new Orders();
                foreach (KeyValuePair<string, object> keyval in KeyVal)
                {

                    if (keyval.Key == "OrderID")
                    {
                        value = data.Where(d => d.OrderID == (int)keyval.Value).FirstOrDefault();
                        value.OrderID = Convert.ToInt32(keyval.Value);
                    }
                    else if (keyval.Key == "CustomerID")
                        value.CustomerID = Convert.ToString(keyval.Value);
                    else if (keyval.Key == "EmployeeID")
                        value.EmployeeID = Convert.ToInt32(keyval.Value);
                    else if (keyval.Key == "Freight")
                        value.Freight = Convert.ToDouble(keyval.Value);
                    else if (keyval.Key == "ShipCountry")
                        value.ShipCountry = Convert.ToString(keyval.Value);
                    else if (keyval.Key == "ShipName")
                        value.ShipName = Convert.ToString(keyval.Value);
                }
            }

            else if (eventType == "endAdd")
            {
                Orders newRecord = new Orders();
                foreach (KeyValuePair<string, object> keyval in KeyVal)
                {

                    if (keyval.Key == "OrderID")
                        newRecord.OrderID = Convert.ToInt32(keyval.Value);
                    else if (keyval.Key == "CustomerID")
                        newRecord.CustomerID = Convert.ToString(keyval.Value);
                    else if (keyval.Key == "EmployeeID")
                        newRecord.EmployeeID = Convert.ToInt32(keyval.Value);
                    else if (keyval.Key == "Freight")
                        newRecord.Freight = Convert.ToDouble(keyval.Value);
                    else if (keyval.Key == "ShipCountry")
                        newRecord.ShipCountry = Convert.ToString(keyval.Value);
                    else if (keyval.Key == "ShipName")
                        newRecord.ShipName = Convert.ToString(keyval.Value);

                }
                data.Insert(0, newRecord);
            }

            else if (eventType == "endDelete")
            {
                foreach (KeyValuePair<string, object> keyval in KeyVal)
                {
                    if (keyval.Key == "OrderID")
                    {
                        Orders value = data.Where(d => d.OrderID == (int)keyval.Value).FirstOrDefault();
                        data.Remove(value);
                    }
                }
            }
            Session["InlineEditDataSource"] = data;
            this.FlatGrid.DataSource = data;
            this.FlatGrid.DataBind();
        }

        [Serializable]
        public class Orders
        {
            public Orders()
            {

            }
            public Orders(int orderId, string customerId, int empId, double freight, string shipName, string shipCountry)
            {
                this.OrderID = orderId;
                this.CustomerID = customerId;
                this.EmployeeID = empId;
                this.Freight = freight;
                this.ShipName = shipName;
                this.ShipCountry = shipCountry;
            }
            public int OrderID { get; set; }
            public string CustomerID { get; set; }
            public int EmployeeID { get; set; }
            public double Freight { get; set; }
            public string ShipName { get; set; }
            public string ShipCountry { get; set; }
        }
        protected void FlatGrid_ServerExcelExporting(object sender, Syncfusion.JavaScript.Web.GridEventArgs e)
        {
            ExcelExport exp = new ExcelExport();
            exp.Export(FlatGrid.Model, (IEnumerable)FlatGrid.DataSource, "Export.xlsx", ExcelVersion.Excel2010, true, true, "flat-lime");
        }

        protected void FlatGrid_ServerWordExporting(object sender, Syncfusion.JavaScript.Web.GridEventArgs e)
        {
            WordExport exp = new WordExport();
            exp.Export(FlatGrid.Model, (IEnumerable)FlatGrid.DataSource, "Export.docx", true, true, "flat-lime");
        }

        protected void FlatGrid_ServerPdfExporting(object sender, Syncfusion.JavaScript.Web.GridEventArgs e)
        {
            PdfExport exp = new PdfExport();
            exp.Export(FlatGrid.Model, (IEnumerable)FlatGrid.DataSource, "Export.pdf", true, true, "flat-lime");
        }
    }
}
