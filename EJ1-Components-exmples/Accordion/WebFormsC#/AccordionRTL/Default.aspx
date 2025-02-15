﻿<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication1._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <ej:Accordion ID="Rtl_Accordion" runat="server" EnableRTL="true">
        <Items>
            <ej:AccordionItem Text="سكريبت">
                <ContentSection>
                    جافا سكريبت (JS) هو تفسير الكمبيوتر لغة البرمجة.
                    تم تنفيذ أصلا كجزء من متصفحات الويب بحيث البرامج النصية من جانب العميل يمكن أن تتفاعل مع المستخدم، والسيطرة على المتصفح،
                    التواصل بشكل غير متزامن، وتغيير محتوى الوثيقة التي تم عرضها. [5] وفي الآونة الأخيرة، ومع ذلك،
                    أصبح من الشائع في كل من تطوير اللعبة وإنشاء تطبيقات سطح المكتب.
                </ContentSection>
            </ej:AccordionItem>
            <ej:AccordionItem Text="C شارب (C #)">
                <ContentSection>
                    يقصد به أن تكون بسيطة وعصرية، لأغراض عامة، لغة البرمجة وجوه المنحى C #.
                    ويقود فريق تطويره بواسطة Anders Hejlsberg. أحدث إصدار هو C # 5.0، والذي صدر في 15 أغسطس 2012.
                </ContentSection>
            </ej:AccordionItem>
            <ej:AccordionItem Text="البصرية الأساسية">
                <ContentSection>
                    يتم تثبيت مترجم سطر الأوامر، VBC.EXE، كجزء من مجانية. NET الإطار SDK.
                    ويشمل أيضا أحادية مترجم VB.NET سطر الأوامر. أحدث إصدار هو VB 2012، والذي صدر في 15 أغسطس 2012.
                </ContentSection>
            </ej:AccordionItem>
        </Items>
    </ej:Accordion>
</asp:Content>
