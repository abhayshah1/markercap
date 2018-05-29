import React, {Component} from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

var changeTypeGridData = [
    {
      "ID": 1,
      "TypeOfWork": "Any New Configuration Asset",
      "Change Made By": "Creating New Asset",
      "Change": "Any New Configuration Asset by Creating New Asset",
      "Impact": "3-Low",
      "Previous Count": 747,
      "Current Count": 845,
      "Diff": 98,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 2,
      "TypeOfWork": "Adding a New Attribute to Product Inventory",
      "Change Made By": "Creating New Attribute",
      "Change": "Adding a new attribute to Product Inventory by Creating New Attribute",
      "Impact": "3-Low",
      "Previous Count": 32,
      "Current Count": 32,
      "Diff": 0,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 3,
      "TypeOfWork": "Business Rule Change (DT/Calc)",
      "Change Made By": "Changing content of Rule",
      "Change": "Business Rule Change (DT/Calc) by Changing content of Rule",
      "Impact": "3-Low",
      "Previous Count": 25,
      "Current Count": 25,
      "Diff": 0,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 4,
      "TypeOfWork": "CFG/SYS Data Changes",
      "Change Made By": "Adding data sheets in Application xls",
      "Change": "CFG/SYS Data Changes by Adding data sheets in Application xls",
      "Impact": "3-Low",
      "Previous Count": 36,
      "Current Count": 41,
      "Diff": 5,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 5,
      "TypeOfWork": "Change Event Trigger",
      "Change Made By": "Changing Orchestration to be fired",
      "Change": "Change Event Trigger by Changing Orchestration to be fired",
      "Impact": "3-Low",
      "Previous Count": 25,
      "Current Count": 27,
      "Diff": 2,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 6,
      "TypeOfWork": "Change Event Trigger",
      "Change Made By": "Changing content of Event Decision",
      "Change": "Change Event Trigger by Changing content of Event Decision",
      "Impact": "3-Low",
      "Previous Count": 24,
      "Current Count": 23,
      "Diff": -1,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 7,
      "TypeOfWork": "Change Event Trigger",
      "Change Made By": "Add Event Decision",
      "Change": "Change Event Trigger by Add Event Decision",
      "Impact": "3-Low",
      "Previous Count": 1,
      "Current Count": 1,
      "Diff": 0,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 8,
      "TypeOfWork": "Configured Orchestration Change (DataAgg)",
      "Change Made By": "Adding a Decision Table on a step",
      "Change": "Configured Orchestration Change (DataAgg) by Adding a Decision Table on a step",
      "Impact": "3-Low",
      "Previous Count": 32,
      "Current Count": 35,
      "Diff": 3,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 9,
      "TypeOfWork": "Modify Application Pre Generation Retrieve API configuration",
      "Change Made By": "Creating new config in Application xls",
      "Change": "Modify Application Retrieve API configuration by Creating new config in Application xls",
      "Impact": "3-Low",
      "Previous Count": 4,
      "Current Count": 5,
      "Diff": 1,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 10,
      "TypeOfWork": "Modify Application Relations",
      "Change Made By": "Updating the Application xls",
      "Change": "Modify Application Relations by Updating the Application xls",
      "Impact": "3-Low",
      "Previous Count": 5,
      "Current Count": 5,
      "Diff": 0,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 11,
      "TypeOfWork": "Modify Integration Artifact",
      "Change Made By": "Updating the Base version of the Artifact",
      "Change": "Modify Integration Artifact by Updating the Base version of the Artifact",
      "Impact": "3-Low",
      "Previous Count": 0,
      "Current Count": 0,
      "Diff": 0,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 12,
      "TypeOfWork": "New Event Trigger",
      "Change Made By": "Associating Orchestration to new Event",
      "Change": "New Event Trigger by Associating Orchestration to new Event",
      "Impact": "3-Low",
      "Previous Count": 88,
      "Current Count": 89,
      "Diff": 1,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 13,
      "TypeOfWork": "Modify XSL Orchestration",
      "Change Made By": "Modify XSL Orchestration",
      "Change": "Changing Base XSL Orchestration",
      "Impact": "3-Low",
      "Previous Count": 1,
      "Current Count": 1,
      "Diff": 0,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 14,
      "TypeOfWork": "Modify Application Pre Generation Compound API configuration",
      "Change Made By": "Creating new config in Application xls",
      "Change": "Modify Application Compound API configuration by Creating new config in Application xls",
      "Impact": "3-Low",
      "Previous Count": 0,
      "Current Count": 0,
      "Diff": 0,
      "Rating": 0,
      "Final Rating": 0
    },
    {
      "ID": 15,
      "TypeOfWork": "Business Rule Change (Decision)",
      "Change Made By": "Changing Rule Meta Data",
      "Change": "Business Rule Change (Decision) by Changing Rule Meta Data",
      "Impact": "2-Medium",
      "Previous Count": 9,
      "Current Count": 10,
      "Diff": 1,
      "Rating": 0.1,
      "Final Rating": 1
    },
    {
      "ID": 16,
      "TypeOfWork": "Business Rule Change (Calculation)",
      "Change Made By": "Changing Rule Meta Data",
      "Change": "Business Rule Change (Calc) by Changing Rule Meta Data",
      "Impact": "2-Medium",
      "Previous Count": 26,
      "Current Count": 26,
      "Diff": 0,
      "Rating": 0.1,
      "Final Rating": 2.6
    },
    {
      "ID": 17,
      "TypeOfWork": "Configured Orchestration Change (DataAgg)",
      "Change Made By": "Changing base Orchestration",
      "Change": "Configured Orchestration Change (DataAgg) by Changing base Orchestration",
      "Impact": "2-Medium",
      "Previous Count": 13,
      "Current Count": 14,
      "Diff": 1,
      "Rating": 0.1,
      "Final Rating": 1.4
    },
    {
      "ID": 18,
      "TypeOfWork": "Modify Coded Core Artifact",
      "Change Made By": "Creating a copy of the Artifact",
      "Change": "Modify Coded Core Artifact by Creating a copy of the Artifact",
      "Impact": "2-Medium",
      "Previous Count": 115,
      "Current Count": 118,
      "Diff": 3,
      "Rating": 0.25,
      "Final Rating": 29.5
    },
    {
      "ID": 19,
      "TypeOfWork": "Modify Core Component/Grp/Application Code",
      "Change Made By": "Creating an Application Level Overlay",
      "Change": "Modify Core Component/Grp/Application Code by Creating an Application Level Overlay",
      "Impact": "2-Medium",
      "Previous Count": 109,
      "Current Count": 117,
      "Diff": 8,
      "Rating": 0.25,
      "Final Rating": 29.25
    },
    {
      "ID": 20,
      "TypeOfWork": "Configured Orchestration Change (Product Orchestration)",
      "Change Made By": "Changing base Product Orchestration",
      "Change": "Configured Orchestration Change (Product Orchestration) by Changing base Product Orchestration",
      "Impact": "2-Medium",
      "Previous Count": 0,
      "Current Count": 0,
      "Diff": 0,
      "Rating": 0.1,
      "Final Rating": 0
    },
    {
      "ID": 21,
      "TypeOfWork": "Adding a new attribute to a Base Product",
      "Change Made By": "Creating New Attribute",
      "Change": "Adding a new attribute to a Base Product by Creating New Attribute",
      "Impact": "1-High",
      "Previous Count": 51,
      "Current Count": 51,
      "Diff": 0,
      "Rating": 0.5,
      "Final Rating": 25.5
    },
    {
      "ID": 22,
      "TypeOfWork": "Modify attribute to a Base Product",
      "Change Made By": "Updating a Base Attribute",
      "Change": "Modify attribute to a Base Product by Updating a Base Attribute",
      "Impact": "1-High",
      "Previous Count": 16,
      "Current Count": 16,
      "Diff": 0,
      "Rating": 0.5,
      "Final Rating": 8
    },
    {
      "ID": 23,
      "TypeOfWork": "Modify attribute to a Base Product",
      "Change Made By": "Creating a New Attribute",
      "Change": "Modify attribute to a Base Product by Creating a New Attribute",
      "Impact": "1-High",
      "Previous Count": 0,
      "Current Count": 0,
      "Diff": 0,
      "Rating": 0.5,
      "Final Rating": 0
    },
    {
      "ID": 24,
      "TypeOfWork": "CFG/SYS Data Changes",
      "Change Made By": "Updating Component/Grp Datasheet",
      "Change": "CFG/SYS Data Changes by Updating Component/Grp Datasheet",
      "Impact": "1-High",
      "Previous Count": 0,
      "Current Count": 0,
      "Diff": 0,
      "Rating": 0.5,
      "Final Rating": 0
    },
    {
      "ID": 25,
      "TypeOfWork": "Changing Entity Definition",
      "Change Made By": "Updating Group/Component xls",
      "Change": "Changing Entity Definition by Updating Group/Component xls",
      "Impact": "1-High",
      "Previous Count": 162,
      "Current Count": 178,
      "Diff": 16,
      "Rating": 0.5,
      "Final Rating": 89
    },
    {
      "ID": 26,
      "TypeOfWork": "Modify .net core",
      "Change Made By": "Updating .net core",
      "Change": "Modify .net core by Updating .net core",
      "Impact": "1-High",
      "Previous Count": 0,
      "Current Count": 0,
      "Diff": 0,
      "Rating": 0.5,
      "Final Rating": 0
    },
    {
      "ID": 27,
      "TypeOfWork": "Modify 8x",
      "Change Made By": "Updating 8x",
      "Change": "Modify 8x by Updating 8x",
      "Impact": "1-High",
      "Previous Count": 0,
      "Current Count": 0,
      "Diff": 0,
      "Rating": 0.75,
      "Final Rating": 0
    },
    {
      "ID": 28,
      "TypeOfWork": "Modify Application Retrieve API configuration",
      "Change Made By": "Updating the Application xls",
      "Change": "Modify Application Retrieve API configuration by Updating the Application xls",
      "Impact": "1-High",
      "Previous Count": 8,
      "Current Count": 8,
      "Diff": 0,
      "Rating": 0.5,
      "Final Rating": 4
    },
    {
      "ID": 29,
      "TypeOfWork": "Modify Coded Core Artifact",
      "Change Made By": "Updating the Base version of the Artifact",
      "Change": "Modify Coded Core Artifact by Updating the Base version of the Artifact",
      "Impact": "1-High",
      "Previous Count": 20,
      "Current Count": 21,
      "Diff": 1,
      "Rating": 0.5,
      "Final Rating": 10.5
    },
    {
      "ID": 30,
      "TypeOfWork": "Modify Core Component/Grp/Application Code",
      "Change Made By": "Updating Base version of the code",
      "Change": "Modify Core Component/Grp/Application Code by Updating Base version of the code",
      "Impact": "1-High",
      "Previous Count": 39,
      "Current Count": 39,
      "Diff": 0,
      "Rating": 0.5,
      "Final Rating": 19.5
    },
    {
      "ID": 31,
      "TypeOfWork": "Modify Application Compound API configuration",
      "Change Made By": "Updating the Application xls",
      "Change": "Modify Application Compound API configuration by Updating the Application xls",
      "Impact": "1-High",
      "Previous Count": 0,
      "Current Count": 0,
      "Diff": 0,
      "Rating": 0.5,
      "Final Rating": 0
    }
  ];

  var changeTypeGridColumns = [
    {
        Header: "ID",
        accessor: "ID"
    },
    {
        Header: "Type of Work",
        accessor: "TypeOfWork"
    },
    {
        Header: "Change Made By",
        accessor: "Change Made By"
    },
    {
        Header: "Impact",
        accessor: "Impact"
    },
    {
        Header: "Rating",
        accessor: "Rating"
    }
  ];

class ChangeTypeGrid extends Component {

    constructor( props ) {
        super(props);
    }

    render() {
        return (
            <ReactTable 
                data={changeTypeGridData} 
                columns={changeTypeGridColumns}
                className="-striped -highlight"
            />
        );
    }

}

export default ChangeTypeGrid;